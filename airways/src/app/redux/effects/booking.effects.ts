import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/core/services/api.service';
import {
  map, exhaustMap, catchError, tap, of,
} from 'rxjs';
import { MessageBarService } from 'src/app/core/services/message-bar.service';
import * as BookingActions from '../actions/booking.actions';

@Injectable()
export class BookingEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private messageBarService: MessageBarService,
  ) { }

  // eslint-disable-next-line arrow-body-style
  getFlights$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookingActions.getFlights),
      exhaustMap(
        ({ request }) => this.apiService.getFlights(request)
          .pipe(
            map((response) => BookingActions.getFlightsSuccess({ response })),
            catchError((message) => of(BookingActions.getFlightsFailed({ message }))),
          ),
      ),
    );
  });

  // eslint-disable-next-line arrow-body-style
  getFlightsFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookingActions.getFlightsFailed),
      tap(({ message }) => this.messageBarService.openMessageBar(message, true)),
    );
  }, { dispatch: false });
}
