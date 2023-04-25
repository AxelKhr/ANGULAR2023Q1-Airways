import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotfoundPageComponent,
    LoginButtonComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})
export class CoreModule { }
