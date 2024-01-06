import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailViewComponent } from './product-detail-view/product-detail-view.component';

const routes: Routes = [{
  path:'list',
  component:ProductsListComponent
},
{
  path:'detail-view/:productId',
  component:ProductDetailViewComponent
},
  {
    path: ':categoryId',  // Add a route with a parameter
    component: ProductsListComponent  // or the component you want to display for this route
  },
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
