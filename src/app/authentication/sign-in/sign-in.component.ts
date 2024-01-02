import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  @ViewChild('signUpFormRef') formFields!: ElementRef;

  checked: boolean;
  checked1: string = 'hi';
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private storageService: StorageService, private router: Router) {
    this.checked = false;
    this.signInForm = this.fb.group({
      // username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.maxLength(100), Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })

  }

  ngOnInit() {

  }

  get formAbstractControl(): { [key: string]: AbstractControl } {
    return this.signInForm.controls;
  }

  signIn() {
    this.router.navigate(['']);
    // if (this.signInForm.valid) {

    //   const data = this.signInForm.getRawValue();
    //   this.authenticationService.login(data).subscribe({
    //     next: resdata => {
    //       if (resdata.status) {
    //         this.storageService.saveUser(resdata.data);
    //       }
    //     },
    //     error: err => {
    //       console.log('Sign In Error ------------', err);
    //     }
    //   })
    // }


  }

}
