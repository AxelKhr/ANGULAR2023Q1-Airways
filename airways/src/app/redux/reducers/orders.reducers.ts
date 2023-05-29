import { createReducer, on } from '@ngrx/store';
import { IOrdersStateModel } from '../state.model';
import * as OrdersActions from '../actions/orders.actions';

export const initialState: IOrdersStateModel = {
  orders: [],
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
);
