import { routerNavigatedAction } from '@ngrx/router-store';
import { createReducer, on } from '@ngrx/store';
import * as GeneralActions from '../actions/general.actions';
import { IGeneralStateModel } from '../state.model';

export const initialState: IGeneralStateModel = {
  isMainStyle: true,
  countryCodes: [],
  airports: [],
};

export const generalReducers = createReducer(
  initialState,
  on(GeneralActions.setIsMainStyle, (state, { isMainStyle }): IGeneralStateModel => ({
    ...state,
    isMainStyle,
  })),
  on(routerNavigatedAction, (state, { payload }): IGeneralStateModel => ({
    ...state,
    isMainStyle: payload.event.urlAfterRedirects.includes('main'),
  })),
  on(GeneralActions.loadStaticDataSuccess, (state, { data }): IGeneralStateModel => ({
    ...state,
    countryCodes: [...data.countryCodes],
    airports: [...data.airports],
  })),
  on(GeneralActions.loadStaticDataFailed, (state): IGeneralStateModel => state),
);
