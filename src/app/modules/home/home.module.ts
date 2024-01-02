import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { FormsModule } from '@angular/forms';
import { ProudctCardComponent } from 'src/app/components/standalone/proudct-card/proudct-card.component';
import { CarouselSliderComponent } from 'src/app/components/standalone/carousel-slider/carousel-slider.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimeNgModule,
    FormsModule,
    ProudctCardComponent,
    CarouselSliderComponent,
    SharedModule
  ]
})
export class HomeModule { }
