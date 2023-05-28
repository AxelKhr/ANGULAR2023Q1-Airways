import {
  Observable,
  Subscription,
  map,
} from 'rxjs';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
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
export class MenuBodyComponent implements OnInit, OnDestroy {
  @Output() editClick = new EventEmitter();

  flightTo = '';

  flightFrom = '';

  flightInfo$: Observable<IFlightsRequestModel | null> = this.store.select(
    AppSelectors.booking.selectFlightsRequest,
  );

  info!: IFlightsRequestModel;

  airports$: Observable<IAirportModel[]> = this.store.select(
    AppSelectors.general.selectAirports,
  );

  airports!: IAirportModel[];

  subscriptions: Subscription[] = [];

  isFlightsStep$: Observable<boolean> = this.store
    .select(selectStep)
    // eslint-disable-next-line @ngrx/avoid-mapping-selectors
    .pipe(map((el) => el?.name === 'flights'));

  // destinationFrom = this.airports?.find(
  //   (airport) => airport.code === this.flightInfo.departureAirportCode,
  // )?.city;

  constructor(private store: Store) {}

  ngOnInit(): void {
    const airportSubscription = this.airports$.subscribe((items) => {
      this.airports = items;
      this.takeCityNames();
    });

    const InfoSubscription = this.flightInfo$.subscribe((el) => {
      if (el) {
        this.info = el;
        this.takeCityNames();
      }
    });

    this.subscriptions.push(airportSubscription, InfoSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe);
  }

  takeCityNames() {
    if (this.airports && this.info) {
      this.flightFrom = this.airports.find((el) => el.code === this.info.departureAirportCode)
        ?.city || '';
      this.flightTo = this.airports.find((el) => el.code === this.info.arrivalAirportCode)
        ?.city || '';
    }
  }
}
