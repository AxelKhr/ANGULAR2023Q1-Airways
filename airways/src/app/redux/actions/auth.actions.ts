import { createAction, props } from '@ngrx/store';
import { IUserProfileModel } from 'src/app/shared/models/user-profile.model';

export enum AuthActionTypes {
  userLogout = '[Auth] user logout',
  authorizationStart = '[Auth] start autorization',
  authorizationStop = '[Auth] stop authorization',
  authorizationSuccess = '[Auth] authorization success',
}

export const userLogout = createAction(
  AuthActionTypes.userLogout,
);

export const authorizationStart = createAction(
  AuthActionTypes.authorizationStart,
);

export const authorizationStop = createAction(
  AuthActionTypes.authorizationStop,
);

export const authorizationSuccess = createAction(
  AuthActionTypes.authorizationSuccess,
  props<{ userProfile: IUserProfileModel }>(),
);
