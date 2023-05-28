import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { DateFormatComponent } from './components/date-format/date-format.component';
import { CurrencySelectorComponent } from './components/currency-selector/currency-selector.component';
import { MatMenuClassDirective } from './directives/mat-menu-class.directive';
import { FormFieldSelectDirective } from './directives/form-field-select.directive';
import { BookingStepperComponent } from './components/booking-stepper/booking-stepper.component';

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
    BookingStepperComponent,
  ],
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
