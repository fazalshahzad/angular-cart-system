import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './MainPortal/cart/cart.component';
import { ProductsComponent } from './MainPortal/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
