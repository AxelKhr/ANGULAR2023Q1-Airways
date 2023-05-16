import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppSelectors } from 'src/app/redux/selectors';
import { AppActions } from 'src/app/redux/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'airways';

  isBackgroundVisible$: Observable<boolean> = this.store.select(
    (AppSelectors.general.selectIsMainStyle),
  );

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(AppActions.general.loadStaticData());
  }
}
