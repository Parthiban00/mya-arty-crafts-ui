import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { CheckoutMainComponent } from './checkout-main/checkout-main.component';

@NgModule({
  declarations: [
    CheckoutMainComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    PrimeNgModule
  ]
})
export class CheckoutModule { }
