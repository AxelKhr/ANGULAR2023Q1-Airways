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
  dateStart: Date | null;
  dateEnd: Date | null;
  passengers: IPassengersQty;
}
