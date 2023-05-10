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
import { passengerNameTip } from 'src/app/environment/constants/name-tip';
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
      birthDate: [null, [Validators.required]],
      needAssistant: [false],
      luggage: [false],
    });

    this.dateFormat = store.select(selectDateFormat);
  }

  ngOnInit(): void {
    this.parentForm = this.parent.form;
    this.parentForm.addControl(`passenger${this.index}`, this.passengerForm);
    this.passengerForm.controls['passengerType'].setValue(this.passengerType);
  }

  get firstName() {
    return this.passengerForm.get('firstName');
  }

  get lastName() {
    return this.passengerForm.get('lastName');
  }
}
