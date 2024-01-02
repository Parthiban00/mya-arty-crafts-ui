import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { CartListComponent } from './cart-list/cart-list.component';


@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    PrimeNgModule
  ]
})
export class CartModule { }
