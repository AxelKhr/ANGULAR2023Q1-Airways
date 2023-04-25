import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  bookingStep = 0;

  constructor(private router: Router) { }

  onClickLogo() {
    this.router.navigate(['/']);
  }
}
