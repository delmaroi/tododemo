/*
 *
 * UserProfilePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FORM_SAVE_SUCCESS_ACTION,
  FORM_SAVE_FAILED_ACTION,
} from 'survey-form';
import { DESTROY_EXAMPLE_SURVEY_PAGE_ACTION } from './constants';

const initialState = fromJS({});

function exampleSurveyPageReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_SAVE_SUCCESS_ACTION:
      return onFormSaveSuccessAction(state);
    case FORM_SAVE_FAILED_ACTION:
      return onFormSaveFailedAction(state);
    case DESTROY_EXAMPLE_SURVEY_PAGE_ACTION:
      return onDestroyExampleSurveyPageAction(state);
    default:
      return state;
  }
}

function onFormSaveSuccessAction(state) {
  return state.merge({
    successMessage: 'Form has been saved.',
    errorMessage: null,
  });
}

function onFormSaveFailedAction(state) {
  return state.merge({
    successMessage: null,
    errorMessage: 'Unable to save the form.',
  });
}

function onDestroyExampleSurveyPageAction(state) {
  return state.merge({
    successMessage: null,
    errorMessage: null,
  });
}

export default exampleSurveyPageReducer;
