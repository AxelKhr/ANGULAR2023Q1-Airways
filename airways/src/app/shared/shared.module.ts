import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { IconsModule } from './icons.module';
import { MessageBarComponent } from './components/message-bar/message-bar.component';

@NgModule({
  declarations: [
    MessageBarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    IconsModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    IconsModule,
    MessageBarComponent,
  ],
})
export class SharedModule { }
