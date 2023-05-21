import { Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IUserLoginModel } from 'src/app/shared/models/user-login.model';
import { AppSelectors } from 'src/app/redux/selectors';
import { Subscription } from 'rxjs';
import { IUserProfileModel } from 'src/app/shared/models/user-profile.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent implements OnDestroy {
  isAuthorization$ = this.store.select(AppSelectors.auth.selectIsAuthorization);

  loginUserSubscr!: Subscription;

  registrateUserSubscr!: Subscription;

  constructor(
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private store: Store,
    private authService: AuthService,
  ) {}

  ngOnDestroy(): void {
    if (this.loginUserSubscr) {
      this.loginUserSubscr.unsubscribe();
    }
    if (this.registrateUserSubscr) {
      this.registrateUserSubscr.unsubscribe();
    }
  }

  loginUser() {
    const userLogin: IUserLoginModel = {
      email: 'user@mail.com',
      password: '123',
    };
    this.loginUserSubscr = this.authService.loginUser(userLogin)
      .subscribe(() => this.dialogRef.close());
  }

  registrateUser() {
    const userProfile: IUserProfileModel = {
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'user@mail.com',
      password: '123',
      dateBirth: '2000-01-01',
      sex: 'male',
      countryCode: 'Belarus',
      phoneNumber: '123456789',
      citizenship: 'Belarus',
    };
    this.registrateUserSubscr = this.authService.registrateUser(userProfile)
      .subscribe(() => this.dialogRef.close());
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
