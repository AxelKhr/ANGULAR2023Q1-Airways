import { ICountryCodeModel } from './country-code.model';

export interface IContactModel {
  countryCode: ICountryCodeModel;
  phoneNumber: string;
  email: string;
}
