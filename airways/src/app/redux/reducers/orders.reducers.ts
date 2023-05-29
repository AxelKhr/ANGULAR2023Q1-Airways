import { createReducer, on } from '@ngrx/store';
import { IOrdersStateModel } from '../state.model';
import * as AuthActions from '../actions/auth.actions';

export const initialState: IOrdersStateModel = {
  orders: [],
};

export const ordersReducers = createReducer(
  initialState,
  // on(AuthActions.userLogout, (state): IAuthStateModel => ({
  //   ...state,
  //   isLoggedIn: false,
  //   userProfile: null,
  // })),
);
