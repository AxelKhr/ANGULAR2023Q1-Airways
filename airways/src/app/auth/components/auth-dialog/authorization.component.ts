import { Component, OnDestroy } from '@angular/core';
import { IUserLoginModel } from 'src/app/shared/models/user-login.model';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppSelectors } from 'src/app/redux/selectors';
import { IUserProfileModel } from 'src/app/shared/models/user-profile.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnDestroy {
  isAuthorization$ = this.store.select(AppSelectors.auth.selectIsAuthorization);

  loginUserSubscr!: Subscription;

  registrateUserSubscr!: Subscription;

  constructor(
    private dialogRef: MatDialogRef<AuthorizationComponent>,
    private authService: AuthService,
    private store: Store,
  ) {}

  ngOnDestroy() {
    if (this.loginUserSubscr) {
      this.loginUserSubscr.unsubscribe();
    }
    if (this.registrateUserSubscr) {
      this.registrateUserSubscr.unsubscribe();
    }
  }

  onSignIn(userLogin: IUserLoginModel) {
    this.loginUserSubscr = this.authService.loginUser(userLogin)
      .subscribe(() => this.dialogRef.close());
  }

  onSignUp(userProfile: IUserProfileModel) {
    this.registrateUserSubscr = this.authService.registrateUser(userProfile)
      .subscribe(() => this.dialogRef.close());
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
