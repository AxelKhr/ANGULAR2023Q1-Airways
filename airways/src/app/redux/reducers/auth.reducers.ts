import { createReducer, on } from '@ngrx/store';
import { IAuthStateModel } from '../state.model';
import * as AuthActions from '../actions/auth.actions';

export const initialState: IAuthStateModel = {
  isLoggedIn: false,
  isAuthorization: false,
  userProfile: null,
};

export const authReducers = createReducer(
  initialState,
  on(AuthActions.userLogout, (state): IAuthStateModel => ({
    ...state,
    isLoggedIn: false,
    userProfile: null,
  })),
  on(AuthActions.authorizationStart, (state): IAuthStateModel => ({
    ...state,
    isAuthorization: true,
  })),
  on(AuthActions.authorizationStop, (state): IAuthStateModel => ({
    ...state,
    isAuthorization: false,
  })),
  on(AuthActions.authorizationSuccess, (state, { userProfile }): IAuthStateModel => ({
    ...state,
    isLoggedIn: true,
    isAuthorization: false,
    userProfile,
  })),
);
