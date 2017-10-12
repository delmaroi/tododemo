import apiClient from 'api-client';

export function getUserProfile() {
  return apiClient
    .get('user');
}

export function patchUserProfile(payload) {
  return apiClient
    .patch('user', payload);
}
