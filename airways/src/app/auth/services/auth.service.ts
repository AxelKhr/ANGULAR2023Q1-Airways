import { Injectable, OnDestroy } from '@angular/core';
import {
  HttpClient, HttpErrorResponse, HttpHeaders, HttpParams,
} from '@angular/common/http';
import { API_DEF } from 'src/app/environment/app.define';
import {
  catchError, tap, EMPTY, Subscription,
} from 'rxjs';
import { IUserProfileModel } from 'src/app/shared/models/user-profile.model';
import { IUserLoginModel } from 'src/app/shared/models/user-login.model';
import { IUserDataModel } from 'src/app/shared/models/user-data.model';
import { MessageBarService } from 'src/app/core/services/message-bar.service';
import * as Storage from 'src/app/core/storage/storage';
import { Store } from '@ngrx/store';
import { AppActions } from 'src/app/redux/actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private checkUserSubscr!: Subscription;

  constructor(
    private http: HttpClient,
    private store: Store,
    private messageService: MessageBarService,
  ) {
    this.checkUser();
  }

  ngOnDestroy(): void {
    if (this.checkUserSubscr) {
      this.checkUserSubscr.unsubscribe();
    }
  }

  private getApiUrl(path: string) {
    return `${API_DEF.API_URL_BASE}/${path}`;
  }

  private handlerError(error: HttpErrorResponse) {
    this.store.dispatch(AppActions.auth.authorizationStop());
    this.messageService.openMessageBar(error.error.message, true);
    return EMPTY;
  }

  registrateUser(userProfile: IUserProfileModel) {
    this.store.dispatch(AppActions.auth.authorizationStart());
    return this.http.post(
      this.getApiUrl(API_DEF.API_URL_USER_REGISTRATION),
      userProfile,
    ).pipe(
      tap(() => {
        this.store.dispatch(AppActions.auth.authorizationStop());
      }),
      catchError(this.handlerError.bind(this)),
    );
  }

  loginUser(userLogin: IUserLoginModel) {
    this.store.dispatch(AppActions.auth.authorizationStart());
    return this.http.post<IUserDataModel>(
      this.getApiUrl(API_DEF.API_URL_USER_LOGIN),
      userLogin,
    ).pipe(
      tap((userData) => {
        Storage.saveUser({
          token: userData.token,
          userId: userData.userId,
        });
        this.store.dispatch(AppActions.auth.authorizationSuccess({
          userProfile: userData.userProfile,
        }));
      }),
      catchError(this.handlerError.bind(this)),
    );
  }

  logoutUser() {
    this.store.dispatch(AppActions.auth.userLogout());
  }

  checkUserRequest() {
    const userData = Storage.loadUser();
    if (userData) {
      this.store.dispatch(AppActions.auth.authorizationStart());
      return this.http.get<IUserProfileModel | boolean>(
        this.getApiUrl(API_DEF.API_URL_USER_CHECK),
        {
          headers: new HttpHeaders().append('Authorization', `Bearer ${userData.token}`),
          params: new HttpParams().append('id', userData.userId),
        },
      ).pipe(
        tap((response) => {
          if ((typeof response === 'boolean') && (response === false)) {
            this.store.dispatch(AppActions.auth.authorizationStop());
          } else {
            this.store.dispatch(AppActions.auth.authorizationSuccess({
              userProfile: response as IUserProfileModel,
            }));
          }
        }),
        catchError(() => {
          this.store.dispatch(AppActions.auth.authorizationStop());
          return EMPTY;
        }),
      );
    }
    return EMPTY;
  }

  checkUser() {
    this.checkUserSubscr = this.checkUserRequest().subscribe();
  }
}
