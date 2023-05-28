import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserLoginModel } from 'src/app/shared/models/user-login.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  @Output() signIn = new EventEmitter<IUserLoginModel>();

  isPasswordHidden = true;

  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\S+@\S+\.\S+$/),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  togglePasswordVisability() {
    this.isPasswordHidden = !this.isPasswordHidden;
  }

  onSubmit() {
    this.signIn.emit(this.signInForm.value as IUserLoginModel);
  }
}
