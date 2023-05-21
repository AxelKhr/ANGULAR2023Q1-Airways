import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthStateModel } from '../state.model';

export const selectAuthState = createFeatureSelector<IAuthStateModel>('auth');

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state) => state.isLoggedIn,
);

export const selectIsAuthorization = createSelector(
  selectAuthState,
  (state) => state.isAuthorization,
);
