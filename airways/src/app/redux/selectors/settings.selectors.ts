import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppSettingsModel } from 'src/app/shared/models/app-settings.model';

export const selectSettingsState = createFeatureSelector<IAppSettingsModel>('settings');

export const selectDateFormat = createSelector(
  selectSettingsState,
  (state) => state.dateFormat,
);
