import { createAction, props } from '@ngrx/store';
import { IOrderSaveModel } from 'src/app/shared/models/order-save.model';
import { IOrderModel } from 'src/app/shared/models/order.model';

export enum OrdersActionTypes {
  orderSave = '[Orders] save order',
  orderSaveSuccess = '[Orders] save order success',
  orderSaveFailed = '[Orders] save order failed',
  ordersLoad = '[Orders] load orders',
  ordersLoadSuccess = '[Orders] load orders success',
  ordersLoadFailed = '[Orders] load orders failed',
  ordersClearList = '[Orders] clear order list',
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

export const ordersLoad = createAction(
  OrdersActionTypes.ordersLoad,
);

export const ordersLoadSuccess = createAction(
  OrdersActionTypes.ordersLoadSuccess,
  props<{ response: IOrderModel[] }>(),
);

export const ordersLoadFailed = createAction(
  OrdersActionTypes.ordersLoadFailed,
  props<{ message: string }>(),
);

export const ordersClearList = createAction(
  OrdersActionTypes.ordersClearList,
);
