import { createAction, props } from '@ngrx/store';

export enum SettingsActionTypes {
  setDateFormat = '[Settings] set date format',
  setCurrency = '[Settings] set currency',
}

export const setDateFormat = createAction(
  SettingsActionTypes.setDateFormat,
  props<{ dateFormat: string }>(),
);

export const setCurrency = createAction(
  SettingsActionTypes.setCurrency,
  props<{ currency: string }>(),
);
