import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
})
export class LoginButtonComponent {
  @Input()
  set isDefMode(value: boolean | null) {
    this.isDefModeValue = (value === null) ? false : value;
  }

  get isDefMode(): boolean {
    return this.isDefModeValue;
  }

  @Input() userName = '';

  isDefModeValue = false;
}
