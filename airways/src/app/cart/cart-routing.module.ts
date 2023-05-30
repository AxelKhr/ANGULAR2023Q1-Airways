import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';

const routes: Routes = [
  { path: '', component: ShopingCartComponent, data: { isCart: true } },
  { path: 'transactions', component: ShopingCartComponent, data: { isCart: false } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule { }
