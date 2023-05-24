import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.scss'],
})
export class SelectPageComponent {
  constructor(private router: Router) {}

  onClickBack() {
    this.router.navigate(['/']);
  }

  onClickContinue() {
    this.router.navigate(['booking', 'process']);
  }
}
