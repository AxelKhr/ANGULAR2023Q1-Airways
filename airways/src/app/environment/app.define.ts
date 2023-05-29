import { IAppSettingsModel } from '../shared/models/app-settings.model';
import { CURRENCY } from './constants/currency';
import { DATE_FORMATS } from './constants/date-formats';

export const SETTINGS_DEF: IAppSettingsModel = {
  dateFormat: DATE_FORMATS[0],
  currency: CURRENCY[0],
};

export const API_DEF = {
  API_NUMBER_OF_REPEATS: 2,
  API_URL_BASE: 'https://airways-backend-production.up.railway.app',
  API_URL_COUNTRY_CODES: 'country-codes',
  API_URL_AIRPORTS: 'airports',
  API_URL_CITIZENSHIP: 'citizenship',
  API_URL_FLIGHTS: 'races',
  API_URL_USER_REGISTRATION: 'auth/registration',
  API_URL_USER_LOGIN: 'auth/login',
  API_URL_USER_CHECK: 'auth/check-auth',
  API_URL_SAVE_ORDER: 'save-order',
  API_URL_LOAD_ORDERS: 'get-orders',
};
