import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, map, startWith, Subscription } from 'rxjs';
import { AppActions } from 'src/app/redux/actions';
import { AppSelectors } from 'src/app/redux/selectors';
import { IAirportModel } from 'src/app/shared/models/airport.model';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';
import { IPassengersQty, ISearchRequest } from '../../models/search.models';
import {
  endDateRequired,
  validateDestination,
  validatePassengers,
} from '../../utils/searchValidators';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit, OnDestroy {
  currentDate = new Date();

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
    dateStart: new FormControl<Date | null>(null, [Validators.required]),
    dateEnd: new FormControl<Date | null>(null, {
      validators: endDateRequired as ValidatorFn,
    }),
    passengers: this.passengersForm,
  });

  passengersType = [
    { type: 'adult', age: '14+ years' },
    { type: 'child', age: '2-14 years' },
    { type: 'infant', age: '0-2 years' },
  ];

  airportsSubscr!: Subscription;

  options: IAirportModel[] = [];

  filteredFromOptions!: Observable<IAirportModel[]>;

  filteredToOptions!: Observable<IAirportModel[]>;

  passengersFormChangesSubscr!: Subscription;

  searchFormIsRoundChangesSubscr!: Subscription | undefined;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    // eslint-disable-next-line @ngrx/no-store-subscription
    this.airportsSubscr = this.store
      .select(AppSelectors.general.selectAirports)
      .subscribe((airports) => {
        this.options = [...airports];
      });

    this.filteredFromOptions = this.searchForm.get('from')!.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : Object.values(value).join(' ');
        return name
          ? this.filterAirportsAutocomplete(name as string)
          : this.options.slice();
      }),
    );

    this.filteredToOptions = this.searchForm
      .get('destination')!
      .valueChanges.pipe(
        startWith(''),
        map((value) => {
          const name = typeof value === 'string' ? value : Object.values(value).join(' ');
          return name ? this.filterAirportsAutocomplete(name as string) : this.options.slice();
        }),
      );

    this.passengersFormChangesSubscr = this.passengersForm.valueChanges.subscribe((el) => {
      this.passengerMessage = this.createPassengerMessage(el);
    });

    this.searchFormIsRoundChangesSubscr = this.searchForm
      .get('isRound')
      ?.valueChanges.subscribe(() => {
        this.searchForm.get('dateEnd')?.updateValueAndValidity();
      });
  }

  ngOnDestroy(): void {
    if (this.airportsSubscr) {
      this.airportsSubscr.unsubscribe();
    }
    if (this.passengersFormChangesSubscr) {
      this.passengersFormChangesSubscr.unsubscribe();
    }
    if (this.searchFormIsRoundChangesSubscr) {
      this.searchFormIsRoundChangesSubscr.unsubscribe();
    }
  }

  private filterAirportsAutocomplete(value: string): IAirportModel[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((airport) => Object.values(airport).some(
      (el) => el.toString().toLowerCase().includes(filterValue)
          || `${airport.city} ${airport.code}`.toLowerCase().includes(filterValue),
    ));
  }

  protected reverseDestinations() {
    const tempFromValue = this.searchForm.get('from')?.value;
    const tempToValue = this.searchForm.get('destination')?.value;
    this.searchForm.get('from')?.setValue(tempToValue);
    this.searchForm.get('destination')?.setValue(tempFromValue);
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

  dispalyShortAirport(airport: IAirportModel) {
    if (airport && airport.city) {
      return `${airport.city} ${airport.code}`;
    }
    if (airport) {
      return String(airport);
    }
    return '';
  }

  submit() {
    const request = this.searchForm.value as ISearchRequest;
    const flightsRequest: IFlightsRequestModel = {
      departureAirportCode: request.from ? request.from.code : '',
      arrivalAirportCode: request.destination ? request.destination.code : '',
      departureDate: request.dateStart ? request.dateStart.toDateString() : '',
      returnDate: request.dateEnd ? request.dateEnd.toDateString() : '',
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
