import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';

@NgModule({
  declarations: [
    ShopingCartComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
  ]
})
export class CartModule { }
