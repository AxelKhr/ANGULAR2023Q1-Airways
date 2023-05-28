import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IFlightModel } from 'src/app/shared/models/flight.model';
import { IRouteModel } from 'src/app/shared/models/route.model';
import { routeData, passengersData } from '../../components/summary/orderData';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss'],
})
export class SummaryPageComponent {
  routes: IRouteModel[] = [routeData, routeData, routeData];

  passengers = passengersData;

  constructor(private router: Router) {}

  onClickBack() {
    this.router.navigate(['booking', 'process']);
  }

  onClickContinue() {
    this.router.navigate(['booking', 'select']);
  }

  getFlights(routes: IRouteModel[]) {
    const flights: IFlightModel[] = [];
    routes.forEach((r) => {
      flights.push(...r.flights);
    });
    return flights;
  }
}
