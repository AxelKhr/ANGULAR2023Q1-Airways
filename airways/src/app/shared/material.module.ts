import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
  ],
  providers: [MatIconRegistry],
})
export class MaterialModule {}
