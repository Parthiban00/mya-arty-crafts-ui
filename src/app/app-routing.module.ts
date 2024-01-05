import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from './shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
    { path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule) },
    { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
    { path: 'our-info', loadChildren: () => import('./modules/our-info/our-info.module').then(m => m.OurInfoModule) },
    { path: 'checkout', loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule) },
    { path: 'my-account', loadChildren: () => import('./modules/my-account/my-account.module').then(m => m.MyAccountModule) }
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
