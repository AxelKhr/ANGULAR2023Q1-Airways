import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageBarComponent } from 'src/app/shared/components/message-bar/message-bar.component';

@Injectable({
  providedIn: 'root',
})
export class MessageBarService {
  constructor(private messageBar: MatSnackBar) { }

  openMessageBar(message: string, isError = false) {
    this.messageBar.openFromComponent(MessageBarComponent, {
      data: { message, isError },
      panelClass: (isError) ? ['message-bar', 'message-bar--error'] : 'message-bar',
      verticalPosition: 'top',
      duration: 2000,
    });
  }
}
