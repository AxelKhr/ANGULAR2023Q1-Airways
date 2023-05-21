import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    LoginDialogComponent,
  ],
  imports: [
    SharedModule,
  ],
})
export class AuthModule { }
