import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectStep } from 'src/app/redux/selectors/booking.selectors';

@Component({
  selector: 'app-booking-menu',
  templateUrl: './booking-menu.component.html',
  styleUrls: ['./booking-menu.component.scss'],
})
export class BookingMenuComponent {
  isDropdownOpen = false;

  isFlightsStep$: Observable<boolean> = this.store
    .select(selectStep)
    // eslint-disable-next-line @ngrx/avoid-mapping-selectors
    .pipe(map((el) => el?.name === 'flights'));

  constructor(private store: Store) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
