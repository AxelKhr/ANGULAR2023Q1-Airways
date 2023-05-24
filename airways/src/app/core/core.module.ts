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
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { SocialMediaComponent } from './components/authorization/social-media/social-media.component';
import { SignUpComponent } from './components/authorization/sign-up/sign-up.component';
import { SignInComponent } from './components/authorization/sign-in/sign-in.component';

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
    AuthorizationComponent,
    SocialMediaComponent,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
