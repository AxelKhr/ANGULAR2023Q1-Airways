import { IContactModel } from './contact.model';
import { IPassengerModel } from './passenger.model';
import { IRouteModel } from './route.model';

export interface IOrderModel {
  departureAirportCode: string;
  arrivalAirportCode: string;
  departureDate: string;
  returnDate: string;
  roundTrip: number;
  passengers: IPassengerModel[];
  contactDetails: IContactModel;
  routes: IRouteModel[];
}
