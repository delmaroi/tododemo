import apiClient from 'api-client';

export function addEvent(patientId, values) {
  return apiClient
    .post('/todolists', values);
}
