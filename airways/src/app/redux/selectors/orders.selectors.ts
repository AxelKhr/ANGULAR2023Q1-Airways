import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IOrdersStateModel } from '../state.model';

export const selectOrdersState = createFeatureSelector<IOrdersStateModel>('orders');

export const selectOrdersCount = createSelector(
  selectOrdersState,
  (state) => state.orders.length,
);

export const selectOrdersList = createSelector(
  selectOrdersState,
  (state) => state.orders,
);
