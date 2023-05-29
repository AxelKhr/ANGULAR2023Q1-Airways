/* eslint-disable no-underscore-dangle */
import { createReducer, on } from '@ngrx/store';
import { IOrdersStateModel } from '../state.model';
import * as OrdersActions from '../actions/orders.actions';

export const initialState: IOrdersStateModel = {
  orders: [],
  ordersPayed: [],
};

export const ordersReducers = createReducer(
  initialState,
  on(OrdersActions.ordersLoadSuccess, (state, { response }): IOrdersStateModel => ({
    ...state,
    orders: [...response],
  })),
  on(OrdersActions.ordersClearList, (state): IOrdersStateModel => ({
    ...state,
    orders: [],
  })),
  on(OrdersActions.orderDeleteSuccess, (state, { orderId }): IOrdersStateModel => ({
    ...state,
    orders: [...state.orders.filter((el) => el._id !== orderId)],
  })),
  on(OrdersActions.orderPaySuccess, (state, { ordersId }): IOrdersStateModel => ({
    ...state,
    orders: [...state.orders.filter((el) => !ordersId.includes(el._id))],
  })),
  on(OrdersActions.ordersPayedLoadSuccess, (state, { response }): IOrdersStateModel => ({
    ...state,
    ordersPayed: [...response],
  })),
);
