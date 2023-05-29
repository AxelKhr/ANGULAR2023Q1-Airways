/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { Moment } from 'moment';
import {
  Observable,
  Subscription,
  debounceTime,
  map,
  startWith,
  take,
} from 'rxjs';
import { AppActions } from 'src/app/redux/actions';
import { AppSelectors } from 'src/app/redux/selectors';
import { IPassengersQty, ISearchRequest } from 'src/app/search/models/search.models';
import {
  endDateRequired,
  validateDestination,
  validatePassengers,
} from 'src/app/search/utils/searchValidators';
import { IAirportModel } from 'src/app/shared/models/airport.model';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.scss'],
})
export class MenuDropdownComponent implements OnInit, OnDestroy {
  currentDate = new Date();

  dateFormat$ = this.store.select(AppSelectors.settings.selectDateFormat);

  airports$: Observable<IAirportModel[]> = this.store.select(
    AppSelectors.general.selectAirports,
  );

  airports!: IAirportModel[];

  flightInfo$: Observable<IFlightsRequestModel | null> = this.store.select(
    AppSelectors.booking.selectFlightsRequest,
  );

  info!: IFlightsRequestModel;

  passengersType = [
    { type: 'adult', age: '14+ years' },
    { type: 'child', age: '2-14 years' },
    { type: 'infant', age: '0-2 years' },
  ];

  passengerMessage = '1 Adult';

  passengersForm: FormGroup = new FormGroup(
    {
      adult: new FormControl(1),
      child: new FormControl(0),
      infant: new FormControl(0),
    },
    { validators: validatePassengers as ValidatorFn },
  );

  searchForm: FormGroup = new FormGroup({
    isRound: new FormControl('1'),
    from: new FormControl('', [Validators.required, validateDestination]),
    destination: new FormControl('', [
      Validators.required,
      validateDestination,
    ]),
    dateStart: new FormControl<Moment | null>(null, [Validators.required]),
    dateEnd: new FormControl<Moment | null>(null, {
      validators: endDateRequired as ValidatorFn,
    }),
    passengers: this.passengersForm,
  });

  filteredFromOptions!: Observable<IAirportModel[]>;

  filteredToOptions!: Observable<IAirportModel[]>;

  subscriptions: Subscription[] = [];

  constructor(private store: Store, private adapter: DateAdapter<Date>) {
    const dateFormatSubscr = this.dateFormat$.subscribe(() => adapter.setLocale('en'));

    this.subscriptions.push(dateFormatSubscr);
  }

  ngOnInit(): void {
    const airportsSubscription = this.airports$.subscribe((items) => {
      this.airports = items;
      this.preFillForms();
    });

    const infoSubscription = this.flightInfo$.subscribe((el) => {
      if (el) {
        this.info = el;
        this.preFillForms();
      }
    });

    const passengersFormSubscription = this.passengersForm.valueChanges.subscribe((el) => {
      this.passengerMessage = this.createPassengerMessage(el);
    });

    this.filteredFromOptions = this.searchForm.get('from')!.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : Object.values(value).join(' ');
        return name
          ? this.filterAirportsAutocomplete(name as string)
          : this.airports.slice();
      }),
    );

    this.filteredToOptions = this.searchForm
      .get('destination')!
      .valueChanges.pipe(
        startWith(''),
        map((value) => {
          const name = typeof value === 'string' ? value : Object.values(value).join(' ');
          return name
            ? this.filterAirportsAutocomplete(name as string)
            : this.airports.slice();
        }),
      );

    // eslint-disable-next-line max-len
    const changeFormSubscription = this.searchForm.valueChanges.pipe(debounceTime(800), take(1)).subscribe((el) => {
      if (this.searchForm.touched && this.searchForm.valid) {
        this.submit(el);
      }
    });

    this.subscriptions.push(
      airportsSubscription,
      infoSubscription,
      passengersFormSubscription,
      changeFormSubscription,
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  private filterAirportsAutocomplete(value: string): IAirportModel[] {
    const filterValue = value.toLowerCase();
    return this.airports.filter((airport) => Object.values(airport).some(
      (el) => el.toString().toLowerCase().includes(filterValue)
          || `${airport.city} ${airport.code}`.toLowerCase().includes(filterValue),
    ));
  }

  preFillForms() {
    if (this.airports && this.info) {
      const flyFrom = this.airports.find(
        (el) => el.code === this.info.departureAirportCode,
      );
      const flyTo = this.airports.find(
        (el) => el.code === this.info.arrivalAirportCode,
      );

      this.searchForm.controls['isRound'].setValue(this.info.roundTrip);
      this.searchForm.controls['from'].setValue(flyFrom);
      this.searchForm.controls['destination'].setValue(flyTo);
      this.searchForm.controls['dateStart'].setValue(
        new Date(this.info.departureDate),
      );
      if (this.info.returnDate) {
        this.searchForm.controls['dateEnd'].setValue(
          new Date(this.info.returnDate),
        );
      }
      this.passengersForm.controls['adult'].setValue(this.info.countAdult);
      this.passengersForm.controls['child'].setValue(this.info.countChildren);
      this.passengersForm.controls['infant'].setValue(this.info.countInfant);

      this.passengerMessage = this.createPassengerMessage(this.passengersForm.value);
    }
  }

  dispalyShortAirport(airport: IAirportModel) {
    if (airport && airport.city) {
      return `${airport.city} ${airport.code}`;
    }
    if (airport) {
      return String(airport);
    }
    return '';
  }

  changePassengerNumber(e: Event, category: string, operation: '+' | '-') {
    e.stopPropagation();
    const control = this.passengersForm.controls[category];
    switch (operation) {
      case '+':
        if (control.value < 9) {
          control.setValue(control.value + 1);
        }
        break;
      case '-':
        if (control.value > 0) {
          control.setValue(control.value - 1);
        }
        break;
      default:
    }
  }

  createPassengerMessage(info: IPassengersQty): string {
    const res: string[] = [];
    Object.entries(info).forEach((el) => {
      if (el[1] > 0) {
        res.push(`${el[1]} ${el[0]}`);
      }
    });

    return res.join(', ');
  }

  updatePassengerColor(type: string) {
    return this.passengersForm.value[type] > 0
      ? 'rgb(17, 57, 126)'
      : 'rgb(28, 27, 31)';
  }

  updatePassengerOpacity(type: string) {
    return this.passengersForm.value[type] === 0 ? '0.5' : '1';
  }

  submit(request: ISearchRequest) {
    const flightsRequest: IFlightsRequestModel = {
      departureAirportCode: request.from ? request.from.code : '',
      arrivalAirportCode: request.destination ? request.destination.code : '',
      departureDate: request.dateStart ? request.dateStart.toString() : '',
      returnDate: request.dateEnd ? request.dateEnd.toString() : '',
      roundTrip: request.isRound ? +request.isRound : 0,
      countAdult: request.passengers.adult,
      countChildren: request.passengers.child,
      countInfant: request.passengers.infant,
      amountFlights: 5,
    };
    this.store.dispatch(
      AppActions.booking.getFlights(flightsRequest, {
        isNewData: true,
        isGoToBooking: true,
      }),
    );
  }
}
