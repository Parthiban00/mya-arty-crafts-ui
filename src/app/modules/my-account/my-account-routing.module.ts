import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountInfoComponent } from './my-account-info/my-account-info.component';

const routes: Routes = [{
  path: '',
  component: MyAccountInfoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
