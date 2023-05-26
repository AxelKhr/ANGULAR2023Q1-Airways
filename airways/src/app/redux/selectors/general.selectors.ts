import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IGeneralStateModel } from '../state.model';

export const selectGeneralState = createFeatureSelector<IGeneralStateModel>('general');

export const selectIsMainStyle = createSelector(
  selectGeneralState,
  (state) => state.isMainStyle,
);

export const selectIsMainStyleInverse = createSelector(
  selectGeneralState,
  (state) => !state.isMainStyle,
);

export const selectAirports = createSelector(
  selectGeneralState,
  (state) => state.airports,
);

export const selectCitizenships = createSelector(
  selectGeneralState,
  (state) => state.citizenships,
);
