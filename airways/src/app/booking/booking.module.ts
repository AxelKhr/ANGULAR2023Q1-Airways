import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { SharedModule } from '../shared/shared.module';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';
import { ProcessPageComponent } from './pages/process-page/process-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { BookingRoutingModule } from './booking-routing.module';
import { RaceComponent } from './components/race/race.component';
import { TimeFormatPipe } from './pipes/time-format.pipe';

@NgModule({
  declarations: [
    BookingPageComponent,
    SelectPageComponent,
    ProcessPageComponent,
    SummaryPageComponent,
    RaceComponent,
    TimeFormatPipe,
  ],
  imports: [
    SharedModule,
    BookingRoutingModule,
    CarouselModule,
  ],
})
export class BookingModule { }
