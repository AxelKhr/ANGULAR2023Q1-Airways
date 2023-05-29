/* eslint-disable no-param-reassign */
import {
  Component,
  ViewEncapsulation,
  Input,
  OnInit,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { DATE_FORMATS } from 'src/app/environment/constants/date-formats';
import { ICustomDateFormat } from 'src/app/shared/models/custom-date-format';

@Component({
  selector: 'app-date-format',
  templateUrl: './date-format.component.html',
  styleUrls: ['./date-format.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DateFormatComponent implements OnInit {
  @Input()
  set isDefMode(value: boolean | null) {
    this.isDefModeValue = value === null ? false : value;
    this.setStyle();
  }

  get isDefMode(): boolean {
    return this.isDefModeValue;
  }

  @Input() isMenuOpen = false;
  @Output() toggleMenu = new EventEmitter<Event>();

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

  formats: ICustomDateFormat;

  constructor(@Inject(MAT_DATE_FORMATS) formats: ICustomDateFormat) {
    this.formats = formats;
  }

  ngOnInit() {
    this.dateFormatValue = this.format;
    this.setCustomFormat(this.dateFormatValue);
  }

  setCustomFormat(value: string) {
    this.formats.display.dateInput = value;
    this.formats.display.dateInput = value;
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
    this.setCustomFormat(this.dateFormatValue);
    this.setFormatEvent.emit(this.dateFormatValue);
  }
}
