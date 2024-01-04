import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurInfoRoutingModule } from './our-info-routing.module';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { OurInfoComponent } from './our-info/our-info.component';


@NgModule({
  declarations: [
    OurInfoComponent
  ],
  imports: [
    CommonModule,
    OurInfoRoutingModule,
    PrimeNgModule
  ]
})
export class OurInfoModule { }
