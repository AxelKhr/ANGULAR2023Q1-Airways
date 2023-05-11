import { ActionReducerMap } from '@ngrx/store';
import { StateModel } from '../state.model';
import { bookingReducer } from './booking.reducer';
import { generalReducer } from './general.reducer';
import { settingsReducer } from './settings.reducer';

export const reducers: ActionReducerMap<StateModel> = {
  settings: settingsReducer,
  general: generalReducer,
  booking: bookingReducer,
};
