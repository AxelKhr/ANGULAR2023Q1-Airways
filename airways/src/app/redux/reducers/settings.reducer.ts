import { createReducer, on } from '@ngrx/store';
import { loadSettings } from 'src/app/core/storage/storage';
import { IAppSettingsModel } from 'src/app/shared/models/app-settings.model';
import * as SettingsActions from '../actions/settings.actions';

export const initialState: IAppSettingsModel = loadSettings();

export const settingsReducer = createReducer(
  initialState,
  on(SettingsActions.setDateFormat, (state, { dateFormat }): IAppSettingsModel => ({
    ...state,
    dateFormat,
  })),
);
