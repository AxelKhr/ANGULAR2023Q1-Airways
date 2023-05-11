import { IBookingStateModel } from '../booking/models/booking-state.model';
import { IAirportModel } from '../shared/models/airport.model';
import { IAppSettingsModel } from '../shared/models/app-settings.model';
import { ICountryCodeModel } from '../shared/models/country-code.model';

export interface IGeneralStateModel {
  isMainStyle: boolean;
  countryCodes: ICountryCodeModel[];
  airports: IAirportModel[];
}

export interface StateModel {
  settings: IAppSettingsModel;
  general: IGeneralStateModel;
  booking: IBookingStateModel;
}
