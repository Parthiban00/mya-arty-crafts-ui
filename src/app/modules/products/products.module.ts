import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { ProudctCardComponent } from 'src/app/components/standalone/proudct-card/proudct-card.component';
import { ProductDetailViewComponent } from './product-detail-view/product-detail-view.component';
import { DynamicFormBuilderComponent } from 'src/app/components/standalone/dynamic-form-builder/dynamic-form-builder.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailViewComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
    FormsModule,
    ProudctCardComponent,
    DynamicFormBuilderComponent
  ]
})
export class ProductsModule { }
