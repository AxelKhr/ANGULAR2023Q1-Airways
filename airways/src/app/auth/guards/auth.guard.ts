import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { MessageBarService } from 'src/app/core/services/message-bar.service';
import { selectIsLoggedIn } from 'src/app/redux/selectors/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store,
    private messageBarService: MessageBarService,
  ) {}

  canActivate(): boolean | Observable<boolean> {
    return this.store.select(selectIsLoggedIn).pipe(
      tap((isLoggedIn) => {
        if (!isLoggedIn) {
          this.messageBarService.openMessageBar('You are not authorized. Please log in.');
        }
      }),
    );
  }
}
