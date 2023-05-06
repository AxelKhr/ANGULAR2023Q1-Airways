import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { MessageBarComponent } from './components/message-bar/message-bar.component';

@NgModule({
  declarations: [
    MessageBarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    MessageBarComponent,
  ],
})
export class SharedModule { }
