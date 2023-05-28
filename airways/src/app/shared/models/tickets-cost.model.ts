import { ITicketsCostPassengerModel } from './tickets-cost-passenger.model';

export interface ITicketsCostModel {
  adult: ITicketsCostPassengerModel;
  children: ITicketsCostPassengerModel;
  infant: ITicketsCostPassengerModel;
}
