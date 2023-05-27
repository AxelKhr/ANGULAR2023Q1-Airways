import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginDialogComponent } from '../components/login-dialog/login-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class AuthDialogService {
  dialogRef!: MatDialogRef<LoginDialogComponent>;

  constructor(private dialog: MatDialog) { }

  open() {
    this.dialogRef = this.dialog.open(LoginDialogComponent);
  }

  close() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
