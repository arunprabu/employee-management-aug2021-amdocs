import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

// products routes config
const productsRoutes: Routes = [
  {
    path: 'products', children: [
      { path: '', component: ProductsListComponent },
      { path: 'cart', component: CartComponent },
      { path: ':id', component: ProductDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes) // registering child routes
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
