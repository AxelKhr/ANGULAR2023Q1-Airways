import {
  Component, Input, Output, EventEmitter,
} from '@angular/core';
import { CURRENCY } from 'src/app/environment/constants/currency';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss'],
})
export class CurrencySelectorComponent {
  @Input()
  set isDefMode(value: boolean | null) {
    this.isDefModeValue = (value === null) ? false : value;
  }

  get isDefMode(): boolean {
    return this.isDefModeValue;
  }

  @Input()
  set currency(value: string | null) {
    if (value) {
      this.currencySelected = value;
    }
  }

  get currency(): string {
    return this.currencySelected;
  }

  @Output() setCurrencyEvent = new EventEmitter<string>();

  isDefModeValue = false;

  currencyList = CURRENCY;

  currencySelected = '';

  onClick(value: string) {
    this.currencySelected = value;
    this.setCurrencyEvent.emit(this.currencySelected);
  }
}
