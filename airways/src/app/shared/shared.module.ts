import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormFieldSelectDirective } from './directives/form-field-select.directive';

@NgModule({
  declarations: [
    FormFieldSelectDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    FormFieldSelectDirective,
  ],
})
export class SharedModule { }
