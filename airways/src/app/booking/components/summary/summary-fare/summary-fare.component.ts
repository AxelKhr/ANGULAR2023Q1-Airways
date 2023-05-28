import { Component, Input, OnInit } from '@angular/core';
import { IFareModel } from 'src/app/booking/models/fare.model';
import { IPassengerModel } from 'src/app/shared/models/passenger.model';
import { IRouteModel } from 'src/app/shared/models/route.model';

@Component({
  selector: 'app-summary-fare',
  templateUrl: './summary-fare.component.html',
  styleUrls: ['./summary-fare.component.scss'],
})
export class SummaryFareComponent implements OnInit {
  @Input() passengers!: IPassengerModel[];

  @Input() routes!: IRouteModel[];

  fare!: IFareModel;

  constructor() {
    this.calcFare();
  }

  ngOnInit() {
    this.calcFare();
  }

  calcFare() {
    if (this.routes) {
      this.routes.forEach((r) => {
        this.fare.adult.fare = +r.ticketsCost.adult.fare;
        this.fare.adult.tax = +r.ticketsCost.adult.tax;
        this.fare.adult.totalCost = +r.ticketsCost.adult.totalCost;
        this.fare.child.fare = +r.ticketsCost.children.fare;
        this.fare.child.tax = +r.ticketsCost.children.tax;
        this.fare.child.totalCost = +r.ticketsCost.children.totalCost;
        this.fare.infant.fare = +r.ticketsCost.infant.fare;
        this.fare.infant.tax = +r.ticketsCost.infant.tax;
        this.fare.infant.totalCost = +r.ticketsCost.infant.totalCost;
      });
    }

    if (this.passengers) {
      this.passengers.forEach((el) => {
        if (el.type === 'adult') {
          this.fare.adult.count += 1;
        } else if (el.type === 'child') {
          this.fare.child.count += 1;
        } else if (el.type === 'infant') {
          this.fare.infant.count += 1;
        }
      });
    }
  }
}
