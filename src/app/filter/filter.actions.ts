import { createAction, props } from '@ngrx/store';

export type validFilters = 'todos' | 'completed' | 'pending';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filter: validFilters }>()
);
