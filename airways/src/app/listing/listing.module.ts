import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { ListingRoutingModule } from './listing-routing.module';

@NgModule({
  declarations: [
    ListingPageComponent,
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
  ],
})
export class ListingModule { }
