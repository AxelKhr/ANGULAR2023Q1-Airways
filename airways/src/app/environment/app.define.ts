import { IAppSettingsModel } from '../shared/models/app-settings.model';
import { CURRENCY } from './constants/currency';
import { DATE_FORMATS } from './constants/date-formats';

export const SETTINGS_DEF: IAppSettingsModel = {
  dateFormat: DATE_FORMATS[0],
  currency: CURRENCY[0],
};
