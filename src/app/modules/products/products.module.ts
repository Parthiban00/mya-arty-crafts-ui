import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { ProudctCardComponent } from 'src/app/components/standalone/proudct-card/proudct-card.component';
import { ProductDetailViewComponent } from './product-detail-view/product-detail-view.component';
import { DynamicFormBuilderComponent } from 'src/app/components/standalone/dynamic-form-builder/dynamic-form-builder.component';
import { TitleDividerComponent } from 'src/app/components/standalone/title-divider/title-divider.component';
import { CarouselSliderComponent } from 'src/app/components/standalone/carousel-slider/carousel-slider.component';
import { ReviewsComponent } from 'src/app/components/standalone/reviews/reviews.component';
import { DialogService } from 'primeng/dynamicdialog';

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
    DynamicFormBuilderComponent,
    TitleDividerComponent,
    CarouselSliderComponent,
    ReviewsComponent
  ],
  providers: [DialogService]
})
export class ProductsModule { }
