import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
  ],
  providers: [MatIconRegistry],
})
export class MaterialModule {}
