import { createAction, props } from '@ngrx/store';
import { IUserCheckModel } from 'src/app/shared/models/user-check.model';
import { IUserDataModel } from 'src/app/shared/models/user-data.model';
import { IUserLoginModel } from 'src/app/shared/models/user-login.model';
import { IUserProfileModel } from 'src/app/shared/models/user-profile.model';

export enum AuthActionTypes {
  registrateUser = '[Auth] registrate user',
  registrateUserSuccess = '[Auth] registrate user success',
  registrateUserFailed = '[Auth] registrate user failed',
  loginUser = '[Auth] login user',
  loginUserSuccess = '[Auth] login user success',
  loginUserFailed = '[Auth] login user failed',
  checkAuth = '[Auth] check authorization',
  checkAuthSuccess = '[Auth] check authorization success',
  checkAuthFailed = '[Auth] check authorization failed',
}

export const registrateUser = createAction(
  AuthActionTypes.registrateUser,
  props<{ userProfile: IUserProfileModel }>(),
);

export const registrateUserSuccess = createAction(
  AuthActionTypes.registrateUserSuccess,
);

export const registrateUserFailed = createAction(
  AuthActionTypes.registrateUserFailed,
  props<{ message: string }>(),
);

export const loginUser = createAction(
  AuthActionTypes.loginUser,
  props<{ userLogin: IUserLoginModel }>(),
);

export const loginUserSuccess = createAction(
  AuthActionTypes.loginUserSuccess,
  props<{ userData: IUserDataModel }>(),
);

export const loginUserFailed = createAction(
  AuthActionTypes.loginUserFailed,
  props<{ message: string }>(),
);

export const checkAuth = createAction(
  AuthActionTypes.checkAuth,
  props<{ userData: IUserCheckModel }>(),
);

export const checkAuthSuccess = createAction(
  AuthActionTypes.checkAuthSuccess,
  props<{ userProfile: IUserProfileModel }>(),
);

export const checkAuthFailed = createAction(
  AuthActionTypes.checkAuthFailed,
  props<{ message: string }>(),
);
