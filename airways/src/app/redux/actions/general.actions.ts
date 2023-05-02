import { createAction, props } from '@ngrx/store';

export enum GeneralActionTypes {
  setIsMainStyle = '[General] set main style flag',
}

export const setIsMainStyle = createAction(
  GeneralActionTypes.setIsMainStyle,
  props<{ isMainStyle: boolean }>(),
);
