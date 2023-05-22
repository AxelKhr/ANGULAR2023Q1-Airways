import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
})
export class LoginButtonComponent {
  @Input()
  set isDefMode(value: boolean) {
    this.isDefModeValue = value;
  }

  get isDefMode(): boolean {
    return this.isDefModeValue;
  }

  @Input()
  set isLoggedIn(value: boolean) {
    this.isLoggedInValue = value;
  }

  get isLoggedIn(): boolean {
    return this.isLoggedInValue;
  }

  @Input()
  set userName(value: string) {
    this.userNameValue = value;
  }

  get userName() {
    return this.userNameValue;
  }

  @Output() signIn = new EventEmitter();

  isDefModeValue = false;

  isLoggedInValue = false;

  userNameValue = '';

  onClick() {
    if (!this.isLoggedInValue) {
      this.signIn.emit();
    }
  }
}
