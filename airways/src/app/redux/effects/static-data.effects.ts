import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  map, exhaustMap, catchError, of, tap,
} from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { MessageBarService } from 'src/app/core/services/message-bar.service';
import * as GeneralActions from '../actions/general.actions';

@Injectable()
export class StaticDataEffects {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private messageBarService: MessageBarService,
  ) { }

  // eslint-disable-next-line arrow-body-style
  loadStaticData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GeneralActions.loadStaticData),
      exhaustMap(() => this.apiService.getCountryCodes()
        .pipe(
          exhaustMap((countryCodes) => this.apiService.getAirports()
            .pipe(
              map((airports) => GeneralActions.loadStaticDataSuccess({
                data: { countryCodes, airports },
              })),
              catchError((message) => of(GeneralActions.loadStaticDataFailed({ message }))),
            )),
          catchError((message) => of(GeneralActions.loadStaticDataFailed({ message }))),
        )),
    );
  });

  // eslint-disable-next-line arrow-body-style
  loadStaticDataFailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GeneralActions.loadStaticDataFailed),
      tap(({ message }) => this.messageBarService.openMessageBar(message, true)),
    );
  }, { dispatch: false });
}
