import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { RaceComponent } from './pages/race/race.component';

const routes: Routes = [
  { path: '', component: ListingPageComponent },
  { path: 'race', component: RaceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingRoutingModule { }
