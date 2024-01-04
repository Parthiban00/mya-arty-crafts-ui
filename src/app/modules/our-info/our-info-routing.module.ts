import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurInfoComponent } from './our-info/our-info.component';

const routes: Routes = [{
  path:':id',
  component: OurInfoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurInfoRoutingModule { }
