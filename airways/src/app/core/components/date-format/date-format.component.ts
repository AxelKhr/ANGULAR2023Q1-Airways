import {
  Component, ViewEncapsulation, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter,
} from '@angular/core';
import { DATE_FORMATS } from 'src/app/environment/constants/date-formats';

@Component({
  selector: 'app-date-format',
  templateUrl: './date-format.component.html',
  styleUrls: ['./date-format.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DateFormatComponent implements OnInit, OnChanges {
  @Input() isDefMode = true;

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

  dateFormats = DATE_FORMATS;

  dateFormatValue = '';

  fieldColor = '';

  borderColor = '';

  backgroundColor = '';

  ngOnInit() {
    this.dateFormatValue = this.format;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isDefMode']) {
      this.setStyle();
    }
  }

  private setStyle() {
    if (!this.isDefMode) {
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
