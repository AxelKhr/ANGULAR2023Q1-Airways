import { createAction, props } from '@ngrx/store';

export enum SettingsActionTypes {
  setDateFormat = '[Settings] SET_DATE_FORMAT',
}

export const setDateFormat = createAction(
  SettingsActionTypes.setDateFormat,
  props<{ dateFormat: string }>(),
);
