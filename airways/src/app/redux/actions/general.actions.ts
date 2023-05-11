import { createAction, props } from '@ngrx/store';
import { IAirwaysStaticDataModel } from 'src/app/shared/models/airways-static-data.model';

export enum GeneralActionTypes {
  setIsMainStyle = '[General] set main style flag',
  loadStaticData = '[General] load static data',
  loadStaticDataSuccess = '[General] load static data success',
  loadStaticDataFailed = '[General] fetch API failed',
  setBookingStep = '[General] set booking step',
}

export const setIsMainStyle = createAction(
  GeneralActionTypes.setIsMainStyle,
  props<{ isMainStyle: boolean }>(),
);

export const loadStaticData = createAction(
  GeneralActionTypes.loadStaticData,
);

export const loadStaticDataSuccess = createAction(
  GeneralActionTypes.loadStaticDataSuccess,
  props<{ data: IAirwaysStaticDataModel }>(),
);

export const loadStaticDataFailed = createAction(
  GeneralActionTypes.loadStaticDataFailed,
  props<{ message: string }>(),
);

export const setBookingStep = createAction(
  GeneralActionTypes.setBookingStep,
  props<{ step: string }>(),
);
