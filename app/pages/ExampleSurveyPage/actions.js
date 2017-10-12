import {
  CREATE_USER_SURVEY_ACTION,
  DESTROY_EXAMPLE_SURVEY_PAGE_ACTION,
} from './constants';

export function createUserSurveyAction() {
  return {
    type: CREATE_USER_SURVEY_ACTION,
  };
}

export function destroyExampleSurveyPageAction() {
  return {
    type: DESTROY_EXAMPLE_SURVEY_PAGE_ACTION,
  };
}
