import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';
import { ProcessPageComponent } from './pages/process-page/process-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { BookingRoutingModule } from './booking-routing.module';

@NgModule({
  declarations: [
    BookingPageComponent,
    SelectPageComponent,
    ProcessPageComponent,
    SummaryPageComponent,
  ],
  imports: [
    SharedModule,
    BookingRoutingModule,
  ],
})
export class BookingModule { }
