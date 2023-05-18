import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { TestRoutingModule } from './test-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TestPageComponent,
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule,
  ],
})
export class TestModule { }
