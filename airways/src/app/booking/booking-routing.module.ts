import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { ProcessPageComponent } from './pages/process-page/process-page.component';
import { SelectPageComponent } from './pages/select-page/select-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';

const routes: Routes = [
  {
    path: '',
    component: BookingPageComponent,
    children: [
      { path: 'select', component: SelectPageComponent },
      { path: 'process', component: ProcessPageComponent },
      { path: 'summary', component: SummaryPageComponent },
      { path: '', redirectTo: 'select', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
