import apiClient from 'api-client';

export function getTodosList() {
  return apiClient
    .get('/todos');
}

export function getTodo(id) {
  const path = `/todos/${id}`;
  return apiClient
    .get(path);
}

export function createTodo(data) {
  return apiClient
    .post('/todos', data);
}

export function updateTodo(id, isComplete) {
  return apiClient
    .put(`/todos/${id}`, isComplete);
}

export function removeTodo(id) {
  return apiClient
    .delete(`/todos/${id}`);
}
