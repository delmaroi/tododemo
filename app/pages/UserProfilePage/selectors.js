import { createSelector } from 'reselect';
import _get from 'lodash/get';

const selectUserProfileDomain = (state) => state.get('userProfilePage');

const selectUserIdFromProps = (ownProps) => _get(ownProps, 'authData.id');

const selectUserRoleFromProps = (ownProps) => _get(ownProps, 'authData.role');

const selectUserProfilePage = createSelector(
  selectUserProfileDomain,
  (substate) => substate.toJS()
);

export default selectUserProfilePage;
export {
  selectUserProfileDomain,
  selectUserIdFromProps,
  selectUserRoleFromProps,
};
