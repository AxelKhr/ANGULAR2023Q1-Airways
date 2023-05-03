import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { DateFormatComponent } from './components/date-format/date-format.component';
import { CurrencySelectorComponent } from './components/currency-selector/currency-selector.component';
import { MatMenuClassDirective } from './directives/mat-menu-class.directive';
import { FormFieldSelectDirective } from './directives/form-field-select.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotfoundPageComponent,
    LoginButtonComponent,
    DateFormatComponent,
    CurrencySelectorComponent,
    FormFieldSelectDirective,
    MatMenuClassDirective,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})
export class CoreModule { }
