import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { passengerNameTip, passwordMatTip } from 'src/app/environment/constants/mat-tooltips';
import { selectDateFormat } from 'src/app/redux/selectors/settings.selectors';
import { IUserProfileModel } from 'src/app/shared/models/user-profile.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  @Output() signUp = new EventEmitter<IUserProfileModel>();

  userTip = passengerNameTip;

  passwordTip = passwordMatTip;

  maxDateBirth = new Date();

  dateFormat: Observable<string>;

  countryCodes = [
    {
      country: 'Australia',
      code: '+61',
    },
    {
      country: 'Austria',
      code: '+43',
    },
  ];

  signUpForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\S+@\S+\.\S+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])/),
      Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)/),
    ]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z\s]*$/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-z\s]*$/),
    ]),
    dateBirth: new FormControl('', Validators.required),
    sex: new FormControl('male', Validators.required),
    countryCode: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]*$/),
      // Validators.minLength(8),
      // Validators.maxLength(8),
    ]),
    citizenship: new FormControl('', Validators.required),
    agreement: new FormControl(false, Validators.requiredTrue),
  });

  constructor(private store: Store) {
    this.dateFormat = store.select(selectDateFormat);
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get lastName() {
    return this.signUpForm.get('lastName');
  }

  get dateBirth() {
    return this.signUpForm.get('dateBirth');
  }

  get sex() {
    return this.signUpForm.get('sex');
  }

  get phoneNumber() {
    return this.signUpForm.get('phoneNumber');
  }

  get citizenship() {
    return this.signUpForm.get('citizenship');
  }

  get countryCode() {
    return this.signUpForm.get('countryCode');
  }

  onSubmit() {
    this.signUp.emit(this.signUpForm.value as IUserProfileModel);
  }
}
