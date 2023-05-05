import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { IAirportInterface, IPassengersQty } from '../../models/search.models';
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
export class SearchPageComponent implements OnInit {
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
    isRound: new FormControl('true'),
    from: new FormControl('', [Validators.required, validateDestination]),
    destination: new FormControl('', [
      Validators.required,
      validateDestination,
    ]),
    dateStart: new FormControl<Date | null>(null, [Validators.required]),
    dateEnd: new FormControl<Date | null>(null, {
      validators: endDateRequired as ValidatorFn,
    }),
    passangers: this.passengersForm,
  });

  passengersType = [
    { type: 'adult', age: '14+ years' },
    { type: 'child', age: '2-14 years' },
    { type: 'infant', age: '0-2 years' },
  ];

  options: IAirportInterface[] = [
    {
      code: 'AMS',
      name: 'Amsterdam Airport Schiphol',
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    {
      code: 'CDG',
      name: 'Paris-Charles de Gaulle Airport',
      city: 'Paris',
      country: 'France',
    },
    {
      code: 'DUB',
      name: 'Dublin Airport',
      city: 'Dublin',
      country: 'Ireland',
    },
    {
      code: 'JFK',
      name: 'John F. Kennedy International Airport',
      city: 'New York',
      country: 'United States',
    },
    {
      code: 'LHR',
      name: 'London Heathrow Airport',
      city: 'London',
      country: 'United Kingdom',
    },
    {
      code: 'MEL',
      name: 'Melbourne Airport',
      city: 'Melbourne',
      country: 'Australia',
    },
    {
      code: 'MUC',
      name: 'Munich Airport',
      city: 'Munich',
      country: 'Germany',
    },
    {
      code: 'NRT',
      name: 'Narita International Airport',
      city: 'Tokyo',
      country: 'Japan',
    },
    {
      code: 'PEK',
      name: 'Beijing Capital International Airport',
      city: 'Beijing',
      country: 'China',
    },
    {
      code: 'PRG',
      name: 'Vaclav Havel Airport Prague',
      city: 'Prague',
      country: 'Czech Republic',
    },
    {
      code: 'ROM',
      name: 'Leonardo da Vinci International Airport',
      city: 'Rome',
      country: 'Italy',
    },
  ];

  filteredFromOptions!: Observable<IAirportInterface[]>;

  filteredToOptions!: Observable<IAirportInterface[]>;

  ngOnInit(): void {
    this.filteredFromOptions = this.searchForm.get('from')!.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : Object.values(value).join(' ');
        return name ? this.filter(name as string) : this.options.slice();
      }),
    );

    this.filteredToOptions = this.searchForm
      .get('destination')!
      .valueChanges.pipe(
        startWith(''),
        map((value) => {
          const name = typeof value === 'string' ? value : Object.values(value).join(' ');
          return name ? this.filter(name as string) : this.options.slice();
        }),
      );

    this.passengersForm.valueChanges.subscribe((el) => {
      this.passengerMessage = this.createPassengerMessage(el);
    });

    this.searchForm.get('isRound')?.valueChanges.subscribe(() => {
      this.searchForm.get('dateEnd')?.updateValueAndValidity();
    });
  }

  private filter(value: string): IAirportInterface[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((airport) => Object.values(airport).some(
      (el) => el.toLowerCase().includes(filterValue)
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

  dispalyShortAirport(airport: IAirportInterface) {
    if (airport && airport.city) {
      return `${airport.city} ${airport.code}`;
    }
    if (airport) {
      return String(airport);
    }
    return '';
  }

  temp() {
    console.log(this.searchForm.value);
  }
}
