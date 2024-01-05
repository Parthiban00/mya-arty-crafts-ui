import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyAccountRoutingModule } from './my-account-routing.module';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { MyAccountInfoComponent } from './my-account-info/my-account-info.component';
import { SharedModule } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    MyAccountInfoComponent
  ],
  imports: [
    CommonModule,
    MyAccountRoutingModule,
    PrimeNgModule,
    SharedModule
  ],
  providers:[
    DialogService
  ]
})
export class MyAccountModule { }
