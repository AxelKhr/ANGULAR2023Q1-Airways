import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/core/services/api.service';
import {
  map, exhaustMap, catchError, tap, of,
} from 'rxjs';
import { MessageBarService } from 'src/app/core/services/message-bar.service';
import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private messageBarService: MessageBarService,
  ) { }

  // eslint-disable-next-line arrow-body-style
  registrateUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.registrateUser),
      exhaustMap(
        ({ userProfile }) => this.apiService.registrateUser(userProfile)
          .pipe(
            map(() => AuthActions.registrateUserSuccess()),
            catchError((message) => of(AuthActions.registrateUserFailed({ message }))),
          ),
      ),
    );
  });

  // eslint-disable-next-line arrow-body-style
  registrateUserFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.registrateUserFailed),
      tap(({ message }) => this.messageBarService.openMessageBar(message, true)),
    );
  }, { dispatch: false });

  // eslint-disable-next-line arrow-body-style
  loginUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginUser),
      exhaustMap(
        ({ userLogin }) => this.apiService.loginUser(userLogin)
          .pipe(
            map((userData) => AuthActions.loginUserSuccess({ userData })),
            catchError((message) => of(AuthActions.loginUserFailed({ message }))),
          ),
      ),
    );
  });

  // eslint-disable-next-line arrow-body-style
  loginUserFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginUserFailed),
      tap(({ message }) => this.messageBarService.openMessageBar(message, true)),
    );
  }, { dispatch: false });

  // eslint-disable-next-line arrow-body-style
  checkUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.checkAuth),
      exhaustMap(
        ({ userData }) => this.apiService.checkUser(userData)
          .pipe(
            map((userProfile) => AuthActions.checkAuthSuccess({ userProfile })),
            catchError((message) => of(AuthActions.checkAuthFailed({ message }))),
          ),
      ),
    );
  });

  // eslint-disable-next-line arrow-body-style
  chechUserFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.checkAuthFailed),
      tap(({ message }) => this.messageBarService.openMessageBar(message, true)),
    );
  }, { dispatch: false });
}
