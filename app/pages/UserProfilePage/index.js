/*
 *
 * UserProfilePage
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { UserIsAuthenticated } from 'redux-auth';
import { createStructuredSelector } from 'reselect';
import UserProfileForm from 'forms/UserProfileForm';
import { SubmissionError } from 'redux-form/immutable';
import { bind } from 'decko';
import diff from 'object-diff';
import AvatarManagement, {
  CropperControls,
  CropperCanvas,
} from 'react-avatar-management';
import 'react-avatar-management/lib/style.css';
import ReactModal from 'react-modal';
import selectUserProfilePage from './selectors';
import {
  loadUserProfileAction,
  submitUserProfileAction,
  destroyUserProfileAction,
  updateAvatarAction,
} from './actions';


const mapStateToProps = createStructuredSelector({
  userProfilePage: selectUserProfilePage,
});

const mapDispatchToProps = {
  onSubmitUserProfile: submitUserProfileAction,
  onLoadUserProfile: loadUserProfileAction,
  onDestroyUserProfile: destroyUserProfileAction,
  onUpdateAvatar: updateAvatarAction,
};

@UserIsAuthenticated
@connect(mapStateToProps, mapDispatchToProps)
export default class UserProfilePage extends PureComponent {
  static propTypes = {
    onLoadUserProfile: PropTypes.func.isRequired,
    onDestroyUserProfile: PropTypes.func.isRequired,
    onSubmitUserProfile: PropTypes.func.isRequired,
    onUpdateAvatar: PropTypes.object.isRequired,
    userProfilePage: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.onLoadUserProfile();
  }

  componentWillUnmount() {
    this.props.onDestroyUserProfile();
  }

  @bind
  handleUserProfileSubmit(values) {
    const {
      onSubmitUserProfile,
      userProfilePage: {
        userProfile,
      },
    } = this.props;

    const changedValues = diff(userProfile, values.toJS());

    return new Promise((resolve, reject) => {
      onSubmitUserProfile(changedValues, resolve, reject);
    }).catch((error) => {
      throw new SubmissionError(error.data);
    });
  }

  @bind
  handleAvatarUpdate(avatarBase64) {
    const { onUpdateAvatar } = this.props;
    const payload = { avatarContent: avatarBase64 };

    return onUpdateAvatar(payload, 'change');
  }

  @bind
  handleAvatarRemove() {
    const { onUpdateAvatar } = this.props;
    const payload = { avatar: null };

    return onUpdateAvatar(payload, 'remove');
  }

  @bind
  renderCropperContainer(cropperContainerProps) {
    const {
      cropperContainerVisible,
      cropperOptions,
      onSubmit,
      onCancel,
    } = cropperContainerProps;

    return (
      <ReactModal
        isOpen={cropperContainerVisible}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-inner">
          <div className="modal-header">Adjust your avatar</div>
          <div className="modal-content">
            <CropperCanvas
              cropperOptions={cropperOptions}
            />
          </div>
          <div className="modal-footer">
            <CropperControls
              onSubmit={onSubmit}
              onCancel={onCancel}
            />
          </div>
        </div>
      </ReactModal>
    );
  }

  @bind
  renderContent() {
    const {
      userProfilePage: {
        userProfile,
        loadingUserProfile,
        isRemovingAvatar,
        isUploadingAvatar,
      },
    } = this.props;

    if (loadingUserProfile) {
      return (
        <p>Loading...</p>
      );
    }

    return (
      <div>
        <AvatarManagement
          avatar={userProfile.avatar}
          isLoading={loadingUserProfile}
          isSubmitting={isUploadingAvatar}
          isRemoving={isRemovingAvatar}
          onAvatarPick={this.handleAvatarUpdate}
          onAvatarRemove={this.handleAvatarRemove}
          outputType="base64"

          renderCropperContainer={this.renderCropperContainer}
        />

        <UserProfileForm
          initialValues={userProfile}
          onSubmit={this.handleUserProfileSubmit}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Helmet
          title="User Profile"
          meta={[
            { name: 'description', content: 'User Profile' },
          ]}
        />

        {this.renderContent()}
      </div>
    );
  }
}
