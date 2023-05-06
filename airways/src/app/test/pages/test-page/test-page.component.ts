import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICountryCodeModel } from 'src/app/shared/models/country-code.model';
import * as AppActions from 'src/app/redux/actions';
import { MessageBarService } from 'src/app/core/services/message-bar.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent {
  countryCodes: ICountryCodeModel[] = [];

  constructor(private store: Store, private messageBarService: MessageBarService) {}

  onClick1() {
    this.store.dispatch(AppActions.general.loadStaticData());
  }

  onClick2() {
    this.messageBarService.openMessageBar('New text', true);
  }
}
