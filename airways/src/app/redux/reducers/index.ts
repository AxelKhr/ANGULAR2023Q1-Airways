import { ActionReducerMap } from '@ngrx/store';
import { StateModel } from '../state.model';
import { authReducers } from './auth.reducers';
import { bookingReducers } from './booking.reducer';
import { generalReducers } from './general.reducer';
import { ordersReducers } from './orders.reducers';
import { settingsReducers } from './settings.reducer';

export const reducers: ActionReducerMap<StateModel> = {
  settings: settingsReducers,
  general: generalReducers,
  booking: bookingReducers,
  auth: authReducers,
  orders: ordersReducers,
};
