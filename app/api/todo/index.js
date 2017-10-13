import apiClient from 'api-client';

export function getTodoLists() {
  return apiClient
    .get('/todolists');
    // .then((response) => ({ data: response }));
}

export function getTodoListTodos(id) {
  return apiClient
    .get(`/todolists/${id}`);
}

export function createTodoList(name) {
  return apiClient
    .post('/todolists', name);
}

export function updateTodoList(name) {
  return apiClient
    .put('/todolists', name);
}

export function removeTodoList(id) {
  return apiClient
    .delete(`/todolists/${id}`);
}
