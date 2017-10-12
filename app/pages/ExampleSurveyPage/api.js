import apiClient from 'api-client';

export function getUserSurveys(userId, params) {
  return apiClient
    .get(`/accounts/${userId}/surveys`, { params })
    .then(processListResponse);
}

export function addUserSurvey(userId, data) {
  return apiClient
    .post(`/accounts/${userId}/surveys`, data);
}

export function addSurveyItem(surveyId, data) {
  return apiClient
    .post(`/surveys/${surveyId}/items`, data);
}

export function getHealthSurveySchemas(params) {
  return apiClient
    .get('/schemas/health_survey', { params });
}

export function getHealthSurveySchema(schemaId, params) {
  return apiClient
    .get(`/schemas/${schemaId}`, { params });
}

function processListResponse(response) {
  const result = response;
  const {
    results,
    ...meta
  } = response.data;

  result.data = results;

  if (result.data) {
    result.data.meta = meta;
  }

  return result;
}
