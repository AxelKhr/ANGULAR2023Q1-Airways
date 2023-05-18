import { IAirportModel } from './airport.model';
import { ICountryCodeModel } from './country-code.model';

export interface IAirwaysStaticDataModel {
  countryCodes: ICountryCodeModel[];
  airports: IAirportModel[];
}
