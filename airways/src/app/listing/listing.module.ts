import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { ListingRoutingModule } from './listing-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListingPageComponent,
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ListingModule { }
