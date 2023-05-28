import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routeData, passengersData } from '../../components/summary/orderData';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss'],
})
export class SummaryPageComponent {
  route = routeData;

  passengers = passengersData;

  constructor(private router: Router) {}

  onClickBack() {
    this.router.navigate(['booking', 'process']);
  }

  onClickContinue() {
    this.router.navigate(['booking', 'select']);
  }
}
