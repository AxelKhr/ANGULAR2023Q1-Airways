import { ActionReducerMap } from '@ngrx/store';
import { StateModel } from '../state.model';
import { generalReducer } from './general.reducer';
import { settingsReducer } from './settings.reducer';

export const reducers: ActionReducerMap<StateModel> = {
  settings: settingsReducer,
  general: generalReducer,
};
