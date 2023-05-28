import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthorizationComponent } from '../components/auth-dialog/authorization.component';

@Injectable({
  providedIn: 'root',
})
export class AuthDialogService {
  dialogRef!: MatDialogRef<AuthorizationComponent>;

  constructor(private dialog: MatDialog) { }

  open() {
    this.dialogRef = this.dialog.open(
      AuthorizationComponent,
      {
        disableClose: true,
        position: {
          top: '45px',
        },
        width: 'auto',
        maxWidth: '90vw',
      },
    );
  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
