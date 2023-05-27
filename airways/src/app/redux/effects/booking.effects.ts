import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/core/services/api.service';
import {
  map, exhaustMap, catchError, tap, of,
} from 'rxjs';
import { MessageBarService } from 'src/app/core/services/message-bar.service';
import { Router } from '@angular/router';
import * as BookingActions from '../actions/booking.actions';

@Injectable()
export class BookingEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private messageBarService: MessageBarService,
    private router: Router,
  ) { }

  // eslint-disable-next-line arrow-body-style
  getFlights$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookingActions.getFlights),
      exhaustMap(
        ({ request, options }) => this.apiService.getFlights(request)
          .pipe(
            map((response) => BookingActions.getFlightsSuccess({ response })),
            tap(() => {
              if (options.isGoToBooking) {
                this.router.navigate(['booking']);
              }
            }),
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
