import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';
import { ProcessPageComponent } from './pages/process-page/process-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { BookingRoutingModule } from './booking-routing.module';
import { RaceComponent } from './components/race/race.component';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

@NgModule({
  declarations: [
    BookingPageComponent,
    SelectPageComponent,
    ProcessPageComponent,
    SummaryPageComponent,
    RaceComponent,
    TimeFormatPipe,
    BookingFormComponent,
    PassengerInfoComponent,
    ContactDetailsComponent,
  ],
  imports: [
    SharedModule,
    BookingRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BookingModule { }
