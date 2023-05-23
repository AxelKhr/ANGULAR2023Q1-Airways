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

  constructor(public dialog: MatDialog) {
    this.openDialog();
  }

  openDialog() {
    this.dialog.open(AuthorizationComponent, {
      disableClose: true,
      position: {
        top: '40px',
      },
      width: 'auto',
    });
  }
  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  // get isDefMode(): boolean {
  //   return this.isDefModeValue;
  // }

  @Input() userName = '';

  isDefModeValue = false;
}
