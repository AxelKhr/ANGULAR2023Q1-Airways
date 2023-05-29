/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/core/services/api.service';
import {
  map, exhaustMap, catchError, tap, of,
} from 'rxjs';
import { MessageBarService } from 'src/app/core/services/message-bar.service';
import { Router } from '@angular/router';
import * as OrdersActions from '../actions/orders.actions';

@Injectable()
export class OrdersEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private messageBarService: MessageBarService,
    private router: Router,
  ) { }

  saveOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.orderSave),
      exhaustMap(
        ({ data, isGoToCart }) => this.apiService.saveOrder(data)
          .pipe(
            map(() => OrdersActions.orderSaveSuccess()),
            map(() => OrdersActions.ordersLoad()),
            tap(() => {
              if (isGoToCart) {
                this.router.navigate(['cart']);
              }
            }),
            catchError((message) => of(OrdersActions.orderSaveFailed({ message }))),
          ),
      ),
    );
  });

  saveOrderFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.orderSaveFailed),
      tap(({ message }) => this.messageBarService.openMessageBar(message, true)),
    );
  }, { dispatch: false });

  loadOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.ordersLoad),
      exhaustMap(
        () => this.apiService.loadOrders().pipe(
          map((response) => OrdersActions.ordersLoadSuccess({ response })),
          catchError((message) => of(OrdersActions.ordersLoadFailed({ message }))),
        ),
      ),
    );
  });

  loadOrdersFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.ordersLoadFailed),
      tap(({ message }) => this.messageBarService.openMessageBar(message, true)),
    );
  }, { dispatch: false });

  deleteOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.orderDelete),
      exhaustMap(
        ({ orderId }) => this.apiService.deleteOrder(orderId)
          .pipe(
            map(() => OrdersActions.orderDeleteSuccess({ orderId })),
            catchError((message) => of(OrdersActions.orderDeleteFailed({ message }))),
          ),
      ),
    );
  });

  deleteOrderFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.orderDeleteFailed),
      tap(({ message }) => this.messageBarService.openMessageBar(message, true)),
    );
  }, { dispatch: false });

  payOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.orderPay),
      exhaustMap(
        ({ ordersId }) => this.apiService.payOrder(ordersId)
          .pipe(
            map(() => OrdersActions.orderPaySuccess({ ordersId })),
            catchError((message) => of(OrdersActions.orderPayFailed({ message }))),
          ),
      ),
    );
  });

  payOrderFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.orderPayFailed),
      tap(({ message }) => this.messageBarService.openMessageBar(message, true)),
    );
  }, { dispatch: false });

  payOrderSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.orderPaySuccess),
      tap(() => this.messageBarService.openMessageBar('Purchased successfully', false)),
    );
  }, { dispatch: false });

  loadPayedOrders$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.ordersPayedLoad),
      exhaustMap(
        () => this.apiService.loadPayedOrders().pipe(
          map((response) => OrdersActions.ordersPayedLoadSuccess({ response })),
          catchError((message) => of(OrdersActions.ordersPayedLoadFailed({ message }))),
        ),
      ),
    );
  });

  loadPayedOrdersFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.ordersPayedLoadFailed),
      tap(({ message }) => this.messageBarService.openMessageBar(message, true)),
    );
  }, { dispatch: false });

  saveOrderAndBuy$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.orderSaveAndBuy),
      exhaustMap(
        ({ data, routePath }) => this.apiService.saveOrder(data)
          .pipe(
            map((saveResponse) => (saveResponse as { message: string }).message.split('ID: ')[1]),
            exhaustMap(
              (ordersId) => this.apiService.payOrder([ordersId])
                .pipe(
                  map(() => OrdersActions.orderPaySuccess({ ordersId: [ordersId] })),
                  tap(() => {
                    if (routePath) {
                      this.router.navigateByUrl(routePath);
                    }
                  }),
                  catchError((message) => of(OrdersActions.orderPayFailed({ message }))),
                ),
            ),
            catchError((message) => of(OrdersActions.orderSaveFailed({ message }))),
          ),
      ),
    );
  });
}
