import { createReducer, on } from '@ngrx/store';
import { IAuthStateModel } from '../state.model';
import * as AuthActions from '../actions/auth.actions';

export const initialState: IAuthStateModel = {
  userId: '',
  token: '',
  userProfile: null,
};

export const authReducers = createReducer(
  initialState,
  on(AuthActions.loginUserSuccess, (state, { userData }): IAuthStateModel => ({
    ...state,
    ...userData,
  })),
);
