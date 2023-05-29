import { IBookingStateModel } from '../booking/models/booking-state.model';
import { IAirportModel } from '../shared/models/airport.model';
import { IAppSettingsModel } from '../shared/models/app-settings.model';
import { ICountryCodeModel } from '../shared/models/country-code.model';
import { ISavedOrderModel } from '../shared/models/order.model';
import { IUserProfileModel } from '../shared/models/user-profile.model';

export interface IGeneralStateModel {
  isMainStyle: boolean;
  countryCodes: ICountryCodeModel[];
  airports: IAirportModel[];
  citizenships: string[];
}

export interface IAuthStateModel {
  isLoggedIn: boolean;
  isAuthorization: boolean;
  userProfile: IUserProfileModel | null;
}

export interface IOrdersStateModel {
  orders: ISavedOrderModel[];
  ordersPayed: ISavedOrderModel[];
}

export interface StateModel {
  settings: IAppSettingsModel;
  general: IGeneralStateModel;
  booking: IBookingStateModel;
  auth: IAuthStateModel;
  orders: IOrdersStateModel;
}
