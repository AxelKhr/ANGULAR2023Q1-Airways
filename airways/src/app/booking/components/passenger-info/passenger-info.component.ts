import {
  Component, Input, OnDestroy, OnInit,
} from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { passengerNameTip } from 'src/app/environment/constants/mat-tooltips';
import { passengersAge } from 'src/app/environment/constants/passengers-age';
import { selectDateFormat } from 'src/app/redux/selectors/settings.selectors';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class PassengerInfoComponent implements OnInit, OnDestroy {
  @Input() type!: string;

  @Input() index!: number;

  parentForm!: FormGroup;

  passengerForm: FormGroup;

  passengerTip = passengerNameTip;

  dateFormat$ = this.store.select(selectDateFormat);

  currentDate = new Date();

  maxDateValue!: Date | null;

  minDateValue!: Date | null;

  dateFormatSubscr!: Subscription;

  constructor(
    private parent: FormGroupDirective,
    formBuilder: FormBuilder,
    private store: Store,
    private adapter: DateAdapter<Date>,
  ) {
    this.passengerForm = formBuilder.group({
      type: [''],
      firstName: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)],
      ],
      sex: ['male'],
      dateBirth: [null, [Validators.required]],
      needAssistance: [false],
      baggage: [false],
    });

    this.dateFormatSubscr = this.dateFormat$.subscribe(() => adapter.setLocale('en'));
  }

  ngOnInit(): void {
    this.parentForm = this.parent.form;
    this.parentForm.addControl(`passenger${this.index}`, this.passengerForm);
    this.passengerForm.controls['type'].setValue(this.type);
    this.limitDatepicker();
  }

  ngOnDestroy(): void {
    this.dateFormatSubscr.unsubscribe();
  }

  limitDatepicker() {
    const type = this.type as 'child' | 'adult' | 'infant';
    this.maxDateValue = passengersAge[type].max;
    this.minDateValue = passengersAge[type].min;
  }

  get firstName() {
    return this.passengerForm.get('firstName');
  }

  get lastName() {
    return this.passengerForm.get('lastName');
  }
}
