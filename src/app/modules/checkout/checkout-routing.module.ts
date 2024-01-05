import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutMainComponent } from './checkout-main/checkout-main.component';

const routes: Routes = [{
  path:'',
  component: CheckoutMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
