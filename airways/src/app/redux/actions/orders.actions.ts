import { createAction, props } from '@ngrx/store';
import { IOrderSaveModel } from 'src/app/shared/models/order-save.model';
import { ISavedOrderModel } from 'src/app/shared/models/order.model';

export enum OrdersActionTypes {
  orderSave = '[Orders] save order',
  orderSaveSuccess = '[Orders] save order success',
  orderSaveFailed = '[Orders] save order failed',
  ordersLoad = '[Orders] load orders',
  ordersLoadSuccess = '[Orders] load orders success',
  ordersLoadFailed = '[Orders] load orders failed',
  ordersClearList = '[Orders] clear order list',
  orderDelete = '[Orders] delete order',
  orderDeleteSuccess = '[Orders] delete order success',
  orderDeleteFailed = '[Orders] delete order failed',
  orderPay = '[Orders] pay order',
  orderPaySuccess = '[Orders] pay order success',
  orderPayFailed = '[Orders] pay order failed',
  ordersPayedLoad = '[Orders] load payed orders',
  ordersPayedLoadSuccess = '[Orders] load payed orders success',
  ordersPayedLoadFailed = '[Orders] load payed orders failed',
  orderSaveAndBuy = '[Orders] save order and buy',
  orderSaveAndBuySuccess = '[Orders] save order and buy success',
  orderSaveAndBuyFailed = '[Orders] save order and buy failed',
}

export const orderSave = createAction(
  OrdersActionTypes.orderSave,
  (data: IOrderSaveModel, isGoToCart?: boolean) => ({
    data,
    isGoToCart: isGoToCart || false,
  }),
);

export const orderSaveAndBuy = createAction(
  OrdersActionTypes.orderSaveAndBuy,
  (data: IOrderSaveModel, routePath?: string) => ({
    data,
    routePath: routePath || '',
  }),
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
  props<{ response: ISavedOrderModel[] }>(),
);

export const ordersLoadFailed = createAction(
  OrdersActionTypes.ordersLoadFailed,
  props<{ message: string }>(),
);

export const ordersClearList = createAction(
  OrdersActionTypes.ordersClearList,
);

export const orderDelete = createAction(
  OrdersActionTypes.orderDelete,
  props<{ orderId: string }>(),
);

export const orderDeleteSuccess = createAction(
  OrdersActionTypes.orderDeleteSuccess,
  props<{ orderId: string }>(),
);

export const orderDeleteFailed = createAction(
  OrdersActionTypes.orderDeleteFailed,
  props<{ message: string }>(),
);

export const orderPay = createAction(
  OrdersActionTypes.orderPay,
  props<{ ordersId: string[] }>(),
);

export const orderPaySuccess = createAction(
  OrdersActionTypes.orderPaySuccess,
  props<{ ordersId: string[] }>(),
);

export const orderPayFailed = createAction(
  OrdersActionTypes.orderPayFailed,
  props<{ message: string }>(),
);

export const ordersPayedLoad = createAction(
  OrdersActionTypes.ordersPayedLoad,
);

export const ordersPayedLoadSuccess = createAction(
  OrdersActionTypes.ordersPayedLoadSuccess,
  props<{ response: ISavedOrderModel[] }>(),
);

export const ordersPayedLoadFailed = createAction(
  OrdersActionTypes.ordersPayedLoadFailed,
  props<{ message: string }>(),
);
