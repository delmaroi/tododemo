/*
 *
 * ExampleSurveyPage
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import connectWithBackend from 'redux-connect-backend';
import { createStructuredSelector } from 'reselect';
import SurveyForm from 'survey-form';
import { UserIsAuthenticated } from 'redux-auth';
import selectExampleSurveyPage from './selectors';
import { getUserSurveys as getUserSurveysApi } from './api';
import {
  createUserSurveyAction,
  destroyExampleSurveyPageAction,
} from './actions';

const mapStateToProps = createStructuredSelector({
  exampleSurveyPage: selectExampleSurveyPage,
});

const mapDispatchToProps = {
  createUserSurvey: createUserSurveyAction,
  onDestroy: destroyExampleSurveyPageAction,
};

const mapApiMethodsToActions = {
  getUserSurveys: getUserSurveysApi,
};

@UserIsAuthenticated
@connect(mapStateToProps, mapDispatchToProps)
@connectWithBackend(mapApiMethodsToActions)
export default class ExampleSurveyPage extends PureComponent {
  static propTypes = {
    exampleSurveyPage: PropTypes.object.isRequired,
    getUserSurveysResult: PropTypes.object.isRequired,
    authData: PropTypes.object.isRequired,
    getUserSurveys: PropTypes.func.isRequired,
    createUserSurvey: PropTypes.func.isRequired,
    onDestroy: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const {
      getUserSurveys,
      authData,
    } = this.props;

    getUserSurveys(authData.id);
  }

  componentWillUnmount() {
    this.props.onDestroy();
  }

  getUserSurvey() {
    const {
      getUserSurveysResult,
      createUserSurvey,
    } = this.props;

    if (!getUserSurveysResult.processing && getUserSurveysResult.data) {
      const firstSurvey = getUserSurveysResult.data[0];

      if (firstSurvey) {
        return firstSurvey;
      }

      createUserSurvey();
    }

    return null;
  }

  render() {
    const userSurvey = this.getUserSurvey();
    const {
      successMessage,
      errorMessage,
    } = this.props.exampleSurveyPage;

    return (
      <div>
        <h1>Survey form</h1>

        {successMessage && <div className="msg msg--success">{successMessage}</div>}
        {errorMessage && <div className="msg msg--error">{errorMessage}</div>}

        {userSurvey && <SurveyForm surveyId={userSurvey.id} />}
      </div>
    );
  }
}
