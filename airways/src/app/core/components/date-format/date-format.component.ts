import {
  Component, ViewEncapsulation, Input, OnInit, Output, EventEmitter,
} from '@angular/core';
import { DATE_FORMATS } from 'src/app/environment/constants/date-formats';

@Component({
  selector: 'app-date-format',
  templateUrl: './date-format.component.html',
  styleUrls: ['./date-format.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DateFormatComponent implements OnInit {
  @Input()
  set isDefMode(value: boolean | null) {
    this.isDefModeValue = (value === null) ? false : value;
    this.setStyle();
  }

  get isDefMode(): boolean {
    return this.isDefModeValue;
  }

  @Input()
  set format(value: string | null) {
    if (value) {
      this.dateFormatValue = value;
    }
  }

  get format(): string {
    return this.dateFormatValue;
  }

  @Output() setFormatEvent = new EventEmitter<string>();

  isDefModeValue = true;

  dateFormats = DATE_FORMATS;

  dateFormatValue = '';

  fieldColor = '';

  borderColor = '';

  backgroundColor = '';

  ngOnInit() {
    this.dateFormatValue = this.format;
  }

  private setStyle() {
    if (this.isDefModeValue) {
      this.fieldColor = '';
      this.borderColor = '';
      this.backgroundColor = '';
    } else {
      const style = getComputedStyle(document.body);
      this.fieldColor = style.getPropertyValue('--app-color-neutral100');
      this.borderColor = style.getPropertyValue('--app-color-neutral60');
      this.backgroundColor = style.getPropertyValue('--app-color-neutral90');
    }
  }

  onChangeValue() {
    this.setFormatEvent.emit(this.dateFormatValue);
  }
}
