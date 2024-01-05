import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpLoaderComponent } from './component/http-loader/http-loader.component';
import { TitleDividerComponent } from '../components/standalone/title-divider/title-divider.component';
import { DynamicDialogComponent } from './component/dynamic-dialog/dynamic-dialog.component';
import { PrimeNgModule } from './prime-ng.module';
import { ItemsListComponent } from '../components/standalone/items-list/items-list.component';

@NgModule({
  declarations: [
    HttpLoaderComponent,
    DynamicDialogComponent
  ],
  imports: [
    CommonModule,
    TitleDividerComponent,
    PrimeNgModule,
    ItemsListComponent
  ],
  exports: [
    HttpLoaderComponent,
    TitleDividerComponent,
    DynamicDialogComponent
  ]
})
export class SharedModule { }
