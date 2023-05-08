import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Selectors from 'src/app/redux/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'airways';

  isBackgroundVisible$: Observable<boolean> = this.store.select(
    (Selectors.general.selectIsMainStyle),
  );

  constructor(private store: Store) { }
}
