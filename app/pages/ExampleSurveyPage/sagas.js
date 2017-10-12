import {
  call,
  cancel,
  fork,
  put,
  select,
  take,
  takeEvery,
} from 'redux-saga/effects';
import { makeAction } from 'redux-connect-backend';
import { selectUser } from 'redux-auth';
import { LOCATION_CHANGE } from 'react-router-redux';
import { CREATE_USER_SURVEY_ACTION } from './constants';
import {
  addSurveyItem,
  addUserSurvey,
  getHealthSurveySchema,
  getHealthSurveySchemas,
  getUserSurveys,
} from './api';

export function* watchCreateUserSurveySaga() {
  const watcher = yield takeEvery(CREATE_USER_SURVEY_ACTION, createUserSurveyStepFetchSchemaSaga);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* createUserSurveyStepFetchSchemaSaga() {
  try {
    const response = yield call(getHealthSurveySchemas);
    const firstHealthSurveySchema = response.data[0];
    yield fork(createUserSurveyStepCreateSurveySaga, firstHealthSurveySchema);
  } catch (error) {
    console.error(error);
  }
}

export function* createUserSurveyStepCreateSurveySaga(firstHealthSurveySchema) {
  try {
    const user = yield select(selectUser);
    const userSurveyData = { schema: firstHealthSurveySchema.id };

    const response = yield call(addUserSurvey, user.id, userSurveyData);
    yield fork(createUserSurveyStepFetchFullSchemaSaga, response.data);
  } catch (error) {
    console.error(error);
  }
}

export function* createUserSurveyStepFetchFullSchemaSaga(survey) {
  try {
    const response = yield call(getHealthSurveySchema, survey.schema);
    yield fork(createUserSurveyStepAddItemsSaga, survey, response.data.questions);
  } catch (error) {
    console.error(error);
  }
}

export function* createUserSurveyStepAddItemsSaga(survey, questions) {
  questions.forEach((question) => {
    const answer = question.answers[0];

    if (answer) {
      const surveyItemData = {
        relatedQuestion: question.id,
        answers: [answer.id],
      };

      addSurveyItem(survey.id, surveyItemData);
    }
  });

  const getUserSurveysAction = makeAction('getUserSurveys', getUserSurveys, [survey.user]);

  yield put(getUserSurveysAction);
}

// All sagas to be loaded
export default [
  watchCreateUserSurveySaga,
];
