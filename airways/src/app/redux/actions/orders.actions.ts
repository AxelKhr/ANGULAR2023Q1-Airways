import { createAction, props } from '@ngrx/store';
import { IOrderSaveModel } from 'src/app/shared/models/order-save.model';

export enum OrdersActionTypes {
  orderSave = '[Orders] save order',
  orderSaveSuccess = '[Orders] save order success',
  orderSaveFailed = '[Orders] save order failed',
}

export const orderSave = createAction(
  OrdersActionTypes.orderSave,
  props<{ data: IOrderSaveModel }>(),
);

export const orderSaveSuccess = createAction(
  OrdersActionTypes.orderSaveSuccess,
);

export const orderSaveFailed = createAction(
  OrdersActionTypes.orderSaveFailed,
  props<{ message: string }>(),
);
