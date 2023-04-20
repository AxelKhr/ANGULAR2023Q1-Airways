import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotfoundPageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})
export class CoreModule { }
