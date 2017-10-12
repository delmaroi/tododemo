import apiClient from 'api-client';

export function getPatients(params) {
  return apiClient
    .get('/patients', { params })
    .then((response) => {
      const result = response;
      const {
        results,
        ...meta
      } = response.data;

      result.data = results;
      result.data.meta = meta;

      return result;
    });
}
