import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Actions from 'src/app/redux/actions';
import * as Selectors from 'src/app/redux/selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  bookingStep = 0;

  orderCount = 5;

  dateFormat$: Observable<string> = this.store.select((Selectors.settings.selectDateFormat));

  constructor(private router: Router, private store: Store) { }

  onClickLogo() {
    this.router.navigate(['/']);
  }

  onChangeFormat(value: string) {
    this.store.dispatch(Actions.settings.setDateFormat({ dateFormat: value }));
  }
}
