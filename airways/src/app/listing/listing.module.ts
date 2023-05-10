import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { ListingRoutingModule } from './listing-routing.module';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { SharedModule } from '../shared/shared.module';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

@NgModule({
  declarations: [
    ListingPageComponent,
    BookingFormComponent,
    PassengerInfoComponent,
    ContactDetailsComponent,
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
