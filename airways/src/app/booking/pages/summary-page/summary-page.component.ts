import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss'],
})
export class SummaryPageComponent {
  constructor(private router: Router) {}

  onClickBack() {
    this.router.navigate(['booking', 'process']);
  }

  onClickContinue() {
    this.router.navigate(['booking', 'select']);
  }
}
