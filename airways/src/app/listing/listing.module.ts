import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { ListingRoutingModule } from './listing-routing.module';
import { RaceComponent } from './pages/race/race.component';
import { SharedModule } from '../shared/shared.module';
import { TimeFormatPipe } from './pipe/time-format.pipe';

@NgModule({
  declarations: [
    ListingPageComponent,
    RaceComponent,
    TimeFormatPipe,
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
    SharedModule,
    CarouselModule,
  ],
})
export class ListingModule { }
