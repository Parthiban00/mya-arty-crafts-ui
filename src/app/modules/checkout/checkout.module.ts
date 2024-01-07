import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { CheckoutMainComponent } from './checkout-main/checkout-main.component';
import { AuthenticationModule } from 'src/app/authentication/authentication.module';

@NgModule({
  declarations: [
    CheckoutMainComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    PrimeNgModule,
    AuthenticationModule
  ]
})
export class CheckoutModule { }
