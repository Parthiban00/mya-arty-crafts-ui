import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from './shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
    { path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule) },
    { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) }
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
