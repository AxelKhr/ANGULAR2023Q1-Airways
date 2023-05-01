import { routerNavigatedAction } from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';
import * as GeneralActions from '../actions/general.actions';
import { IGeneralStateModel } from '../state.model';

export const initialState: IGeneralStateModel = {
  isMainStyle: true,
};

export const generalReducer = createReducer(
  initialState,
  on(GeneralActions.setIsMainStyle, (state, { isMainStyle }): IGeneralStateModel => ({
    ...state,
    isMainStyle,
  })),
  on(routerNavigatedAction, (state, { payload }): IGeneralStateModel => ({
    ...state,
    isMainStyle: payload.event.url.includes('main'),
  })),
);
