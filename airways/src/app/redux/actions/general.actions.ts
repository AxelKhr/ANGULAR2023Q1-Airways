import { createAction, props } from '@ngrx/store';

export enum GeneralActionTypes {
  setIsMainStyle = '[General] SET_IS_MAIN_STYLE',
}

export const setIsMainStyle = createAction(
  GeneralActionTypes.setIsMainStyle,
  props<{ isMainStyle: boolean }>(),
);
