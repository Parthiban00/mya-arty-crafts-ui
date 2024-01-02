import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { PrimeNgModule } from '../shared/prime-ng.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
