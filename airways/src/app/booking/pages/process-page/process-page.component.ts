import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process-page',
  templateUrl: './process-page.component.html',
  styleUrls: ['./process-page.component.scss'],
})
export class ProcessPageComponent {
  constructor(private router: Router) {}

  onClickBack() {
    this.router.navigate(['booking', 'select']);
  }

  onClickContinue() {
    this.router.navigate(['booking', 'summary']);
  }
}
