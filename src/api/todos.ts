import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 547;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const addTodo = (todo: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', todo);
};

// Add more methods here
