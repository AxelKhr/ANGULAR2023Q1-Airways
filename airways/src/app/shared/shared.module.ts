import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { IconsModule } from './icons.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    IconsModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    IconsModule,
  ],
})
export class SharedModule { }
