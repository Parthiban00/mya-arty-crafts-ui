import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpLoaderComponent } from './component/http-loader/http-loader.component';
import { TitleDividerComponent } from '../components/standalone/title-divider/title-divider.component';

@NgModule({
  declarations: [
    HttpLoaderComponent
  ],
  imports: [
    CommonModule,
    TitleDividerComponent
  ],
  exports: [
    HttpLoaderComponent,
    TitleDividerComponent
  ]
})
export class SharedModule { }
