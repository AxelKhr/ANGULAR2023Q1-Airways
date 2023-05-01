import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from 'src/app/redux/actions';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  private isFlag = false;

  constructor(private store: Store) {}

  onClick() {
    this.isFlag = !this.isFlag;
    this.store.dispatch(Actions.general.setIsMainStyle({ isMainStyle: this.isFlag }));
  }
}
