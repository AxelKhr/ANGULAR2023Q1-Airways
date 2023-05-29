import { Moment } from 'moment';
import { IAirportModel } from 'src/app/shared/models/airport.model';

export interface IPassengersQty {
  adult: number;
  child: number;
  infant: number;
}

export interface ISearchRequest {
  isRound: string | null,
  from: IAirportModel | null;
  destination: IAirportModel | null;
  dateStart: Moment | null;
  dateEnd: Moment | null;
  passengers: IPassengersQty;
}
