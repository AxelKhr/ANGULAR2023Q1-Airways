import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
export class PassengerInfoComponent implements OnInit {
  @Input() passengerType!: string;

  @Input() index!: number;

  parentForm!: FormGroup;

  passengerForm: FormGroup;

  passengerTip = passengerNameTip;

  dateFormat: Observable<string>;

  currentDate = new Date();

  maxDateValue!: Date | null;

  minDateValue!: Date | null;

  constructor(
    private parent: FormGroupDirective,
    formBuilder: FormBuilder,
    private store: Store
  ) {
    this.passengerForm = formBuilder.group({
      passengerType: [''],
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

    this.dateFormat = store.select(selectDateFormat);
  }

  ngOnInit(): void {
    this.parentForm = this.parent.form;
    this.parentForm.addControl(`passenger${this.index}`, this.passengerForm);
    this.passengerForm.controls['passengerType'].setValue(this.passengerType);
    this.limitDatepicker();
  }

  limitDatepicker() {
    const type = this.passengerType as 'child' | 'adult' | 'infant';
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
