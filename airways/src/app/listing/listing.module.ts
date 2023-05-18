import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { ListingRoutingModule } from './listing-routing.module';
import { RaceComponent } from './pages/race/race.component';
import { SharedModule } from '../shared/shared.module';
import { TimeFormatPipe } from './pipe/time-format.pipe';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

@NgModule({
  declarations: [
    ListingPageComponent,
    RaceComponent,
    TimeFormatPipe,
    BookingFormComponent,
    PassengerInfoComponent,
    ContactDetailsComponent,
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
    SharedModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ListingModule { }
