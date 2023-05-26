import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
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
    console.log(this.signInForm.value);
  }
}
