import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchRoutingModule } from './search-routing.module';
import { BindAutocompletesPipe } from './pipe/bind-autocompletes.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SearchPageComponent, BindAutocompletesPipe],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class SearchModule {}
