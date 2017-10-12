import apiClient from 'api-client';

export function getUsers(params) {
  return apiClient
    .get('/users', { params })
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
