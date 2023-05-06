import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss'],
})
export class MessageBarComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<MessageBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: { message: string, isError: boolean },
  ) { }
}
