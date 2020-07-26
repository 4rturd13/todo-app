import { createAction, props } from '@ngrx/store';

export const clearTodo = createAction('[TODO] Clear TODOS');

export const create = createAction(
  '[TODO] create Todo',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);

export const edit = createAction(
  '[TODO] Edit Todo',
  props<{ id: number; text: string }>()
);

export const toggleAll = createAction(
  '[TODO] Toggle TodoAll',
  props<{ completed: boolean }>()
);

export const deleteTodo = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
);
