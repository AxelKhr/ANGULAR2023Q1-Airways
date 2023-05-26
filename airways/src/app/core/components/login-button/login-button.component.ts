import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorizationComponent } from '../authorization/authorization.component';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss'],
})
export class LoginButtonComponent {
  @Input()
  set isDefMode(value: boolean | null) {
    this.isDefModeValue = value === null ? false : value;
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AuthorizationComponent, {
      disableClose: true,
      position: {
        top: '45px',
      },
      width: 'auto',
      maxWidth: '90vw',
    });
  }

  @Input() userName = '';

  isDefModeValue = false;
}
