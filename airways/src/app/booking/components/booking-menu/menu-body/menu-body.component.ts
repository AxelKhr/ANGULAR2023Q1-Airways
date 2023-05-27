import { Observable, first, map } from 'rxjs';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';
import { IAirportModel } from 'src/app/shared/models/airport.model';
import { Store } from '@ngrx/store';
import { AppSelectors } from 'src/app/redux/selectors';
import { selectStep } from 'src/app/redux/selectors/booking.selectors';

@Component({
  selector: 'app-menu-body',
  templateUrl: './menu-body.component.html',
  styleUrls: ['./menu-body.component.scss'],
})
export class MenuBodyComponent implements OnInit {
  @Output() editClick = new EventEmitter();

  flightInfo: IFlightsRequestModel = {
    departureAirportCode: 'WAW',
    arrivalAirportCode: 'DUB',
    departureDate: '2023-04-27',
    returnDate: '2023-04-28',
    roundTrip: 1,
    countAdult: 1,
    countChildren: 2,
    countInfant: 0,
    amountFlights: 5,
  };

  airports$: Observable<IAirportModel[]> = this.store.select(
    AppSelectors.general.selectAirports
  );

  airports!: IAirportModel[];

  isFlightsStep$: Observable<boolean> = this.store
    .select(selectStep)
    // eslint-disable-next-line @ngrx/avoid-mapping-selectors
    .pipe(map((el) => el?.name === 'flights'));

  destinationFrom = this.airports?.find(
    (airport) => airport.code === this.flightInfo.departureAirportCode
  )?.city;

  constructor(private store: Store) {
    // console.log(this.airports$);
  }

  ngOnInit(): void {
    this.airports$.pipe(first()).subscribe((items) => {
      this.airports = items;
    });
  }
}
