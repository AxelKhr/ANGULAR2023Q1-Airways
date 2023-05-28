import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFareModel } from 'src/app/booking/models/fare.model';
import { AppSelectors } from 'src/app/redux/selectors';
import { IPassengerModel } from 'src/app/shared/models/passenger.model';
import { IRouteModel } from 'src/app/shared/models/route.model';

@Component({
  selector: 'app-summary-fare',
  templateUrl: './summary-fare.component.html',
  styleUrls: ['./summary-fare.component.scss'],
})
export class SummaryFareComponent {
  @Input()
  get passengers() {
    return [...this.passengersValue];
  }

  set passengers(value: IPassengerModel[]) {
    this.passengersValue = [...value];
    this.calcFare();
  }

  @Input()
  get routes() {
    return [...this.routes];
  }

  set routes(value: IRouteModel[]) {
    this.routesValue = [...value];
    this.calcFare();
  }

  passengersValue: IPassengerModel[] = [];

  routesValue: IRouteModel[] = [];

  fare!: IFareModel;

  currency$ = this.store.select(AppSelectors.settings.selectCurrency);

  constructor(private store: Store) {
    this.clearFare();
  }

  clearFare() {
    this.fare = {
      adult: {
        count: 0,
        totalCost: 0,
        fare: 0,
        tax: 0,
      },
      child: {
        count: 0,
        totalCost: 0,
        fare: 0,
        tax: 0,
      },
      infant: {
        count: 0,
        totalCost: 0,
        fare: 0,
        tax: 0,
      },
      total: 0,
    };
  }

  calcFare() {
    this.clearFare();
    this.routesValue.forEach((r) => {
      this.fare.adult.fare += +r.ticketsCost.adult.fare;
      this.fare.adult.tax += +r.ticketsCost.adult.tax;
      this.fare.adult.totalCost += +r.ticketsCost.adult.totalCost;
      this.fare.child.fare += +r.ticketsCost.children.fare;
      this.fare.child.tax += +r.ticketsCost.children.tax;
      this.fare.child.totalCost += +r.ticketsCost.children.totalCost;
      this.fare.infant.fare += +r.ticketsCost.infant.fare;
      this.fare.infant.tax += +r.ticketsCost.infant.tax;
      this.fare.infant.totalCost += +r.ticketsCost.infant.totalCost;
    });

    this.passengersValue.forEach((el) => {
      if (el.type === 'adult') {
        this.fare.adult.count += 1;
      } else if (el.type === 'child') {
        this.fare.child.count += 1;
      } else if (el.type === 'infant') {
        this.fare.infant.count += 1;
      }
    });

    this.fare.total = this.fare.adult.totalCost * this.fare.adult.count
    + this.fare.child.totalCost * this.fare.child.count
    + this.fare.infant.totalCost * this.fare.infant.count;
  }
}
