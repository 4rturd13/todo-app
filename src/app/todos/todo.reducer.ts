import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Save the world'),
  new Todo('Don"t eat cheese'),
  new Todo('Don"t eat sugar'),
  new Todo('Travel around the world'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.create, (state, { text }) => [...state, new Todo(text)]),

  on(actions.clearTodo, (state) => state.filter((todo) => !todo.completed)),

  on(actions.deleteTodo, (state, { id }) =>
    state.filter((todo) => todo.id !== id)
  ),

  on(actions.toggleAll, (state, { completed }) =>
    state.map((todo) => {
      return {
        ...todo,
        completed,
      };
    })
  ),

  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  }),

  on(actions.edit, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
