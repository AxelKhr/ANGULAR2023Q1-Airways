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

  // eslint-disable-next-line arrow-body-style
  saveOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.orderSave),
      exhaustMap(
        ({ data }) => this.apiService.saveOrder(data)
          .pipe(
            map(() => OrdersActions.orderSaveSuccess()),
            catchError((message) => of(OrdersActions.orderSaveFailed({ message }))),
          ),
      ),
    );
  });

  // eslint-disable-next-line arrow-body-style
  saveOrderFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.orderSaveFailed),
      tap(({ message }) => this.messageBarService.openMessageBar(message, true)),
    );
  }, { dispatch: false });

  // eslint-disable-next-line arrow-body-style
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

  // eslint-disable-next-line arrow-body-style
  loadOrdersFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(OrdersActions.ordersLoadFailed),
      tap(({ message }) => this.messageBarService.openMessageBar(message, true)),
    );
  }, { dispatch: false });
}
