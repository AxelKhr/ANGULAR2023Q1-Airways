import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { MaterialModule } from '../shared/material.module';
import { DateFormatComponent } from './components/date-format/date-format.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotfoundPageComponent,
    LoginButtonComponent,
    DateFormatComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})
export class CoreModule { }
