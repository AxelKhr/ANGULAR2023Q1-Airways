import {
  Component, EventEmitter, Input, OnDestroy, OnInit, Output,
} from '@angular/core';
import { IAirportModel } from 'src/app/shared/models/airport.model';
import { IFlightsRequestModel } from 'src/app/shared/models/flights-request.model';
import { IRouteModel } from 'src/app/shared/models/route.model';
import { Observable, Subscription, map } from 'rxjs';
import { IFlightSeatsModel } from 'src/app/shared/models/flight-seats.model';

interface IResponsiveOption {
  breakpoint: string;
  numVisible: number;
  numScroll: number;
}

interface IRoute extends IRouteModel {
  isActive: boolean;
}

@Component({
  selector: 'app-race[airports\\$][routes\\$][request\\$]',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent implements OnInit, OnDestroy {
  @Input() airports$!: Observable<IAirportModel[]>;

  @Input() routes$!: Observable<IRouteModel[]>;

  @Input() request$!: Observable<IFlightsRequestModel | null>;

  @Input() isReturned = false;

  @Output() selectRoute = new EventEmitter<IRouteModel | null>();

  routes: IRoute[] = [];

  routesSubscr!: Subscription;

  request!: IFlightsRequestModel;

  requestSubscr!: Subscription;

  isEdit = true;

  buttonText = 'Select';

  activeRouteInd = 2; // активная карточка

  currentDate = new Date();

  responsiveOptions: IResponsiveOption[] = [
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '440px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  ngOnInit() {
    this.routesSubscr = this.routes$.subscribe(
      (inputRoutes) => {
        this.routes = inputRoutes.map<IRoute>((el) => ({
          ...el,
          isActive: false,
        }));
      },
    );

    this.requestSubscr = this.request$.subscribe({
      next: (inputRequest) => {
        if (inputRequest) {
          this.request = inputRequest;
        }
      },
    });

    const windowWidth = window.innerWidth;
    this.setOldDates(this.routes);
    this.setActiveRoute(windowWidth);
    this.setInitialActive();
  }

  ngOnDestroy(): void {
    if (this.routesSubscr) {
      this.routesSubscr.unsubscribe();
    }
    if (this.requestSubscr) {
      this.requestSubscr.unsubscribe();
    }
  }

  setOldDates(data: IRouteModel[]): void {
    const today = this.currentDate.getDate();
    const firstItem = data[0];
    const firstItemDate = new Date(firstItem.departureDate);
    const hasTodayDate = firstItemDate.getDate() === today;

    if (hasTodayDate) {
      const additionalItems = [];
      for (let i = 2; i >= 1; i -= 1) {
        const previousDate = new Date(
          this.currentDate.getFullYear(),
          this.currentDate.getMonth(),
          today - i,
        ).toISOString();
        const newItem = {
          ...firstItem,
          departureDate: previousDate,
          flights: [],
        };
        additionalItems.push(newItem);
      }
      data.splice(0, 0, ...additionalItems);
    }
  }

  compareDates(departureDate: string): boolean {
    const currentDate = new Date();
    const formattedDepartureDate = new Date(departureDate);
    return formattedDepartureDate < new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
    );
  }

  setInitialActive(): void {
    this.routes[this.activeRouteInd].isActive = true;
  }

  setActiveRoute(windowWidth: number): void {
    if (windowWidth < 440) {
      this.activeRouteInd = 0;
    } else if (windowWidth < 768) {
      this.activeRouteInd = 1;
    } else {
      this.activeRouteInd = 2;
    }
  }

  setActive(route: IRoute): void {
    this.activeRouteInd = this.routes.findIndex((r) => r === route);
    for (let i = 0; i < this.routes.length; i += 1) {
      this.routes[i].isActive = false;
    }
    this.routes[this.activeRouteInd].isActive = true;
  }

  getMinSeats(route: IRouteModel): IFlightSeatsModel {
    if (route.flights.length > 1) {
      const minSeatsFlight = route.flights.reduce(
        (min, curr) => ((curr.seats.freeSeats < min.seats.freeSeats) ? curr : min),
        route.flights[0],
      );
      return minSeatsFlight.seats;
    }
    return route.flights[0].seats;
  }

  getColor(opacity: number, seats: IFlightSeatsModel): string {
    if (seats.freeSeats < 10) {
      return `rgba(179, 38, 30, ${opacity})`;
    }
    if ((seats.freeSeats / seats.totalSeats) * 100 < 50) {
      return `rgba(241, 201, 51, ${opacity})`;
    }
    return `rgba(46, 125, 50, ${opacity})`;
  }

  getAirportName(code: string): Observable<string> {
    return this.airports$.pipe(
      map((airports) => {
        const airport = airports.find((a) => a.code === code);
        if (!airport) {
          return code;
        }
        const airportName = airport.name
          .replace(/International/g, '')
          .replace(/Airport/g, '')
          .trim();
        return airportName;
      }),
    );
  }

  getAirportTimezone(code: string): Observable<string> {
    return this.airports$.pipe(
      map((airports) => {
        const airport = airports.find((a) => a.code === code);
        if (!airport) {
          return '';
        }
        const airportZone = airport.timezone;
        const timeZoneSign = airportZone >= 0 ? '+' : '-';
        const timeZoneValue = Math.abs(airportZone);
        return timeZoneSign + timeZoneValue;
      }),
    );
  }

  buttonClick(): void {
    this.selectRoute.emit(this.isEdit ? this.routes[this.activeRouteInd] : null);
    this.isEdit = !this.isEdit;
    this.buttonText = this.isEdit ? 'Select' : 'Edit';
  }
}
