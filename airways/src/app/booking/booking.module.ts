import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';
import { ProcessPageComponent } from './pages/process-page/process-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingMenuComponent } from './components/booking-menu/booking-menu.component';
import { MenuBodyComponent } from './components/booking-menu/menu-body/menu-body.component';
import { MenuDropdownComponent } from './components/booking-menu/menu-dropdown/menu-dropdown.component';

@NgModule({
  declarations: [
    BookingPageComponent,
    SelectPageComponent,
    ProcessPageComponent,
    SummaryPageComponent,
    BookingMenuComponent,
    MenuBodyComponent,
    MenuDropdownComponent,
  ],
  imports: [
    SharedModule,
    BookingRoutingModule,
  ],
})
export class BookingModule { }
