import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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

  @Input('inputData') inputData: any;
  @Output() emitData = new EventEmitter<any>();

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
    if (this.inputData) {
      //from modal
    }
  }

  get formAbstractControl(): { [key: string]: AbstractControl } {
    return this.signInForm.controls;
  }

  goToSignUp(){
    if(this.inputData){
      this.emitData.emit({status:'new-user', next:'sign-up'});

    } else {
      this.router.navigate(['/auth/sign-up']);
    }
  }


  signIn() {
    if(this.inputData){
      this.emitData.emit({status:'logged-in', next:'send-otp'});

    } else {
      //need to send otp
      this.router.navigate(['/auth/OTP']);

    }
    


    // if (this.signInForm.valid) {

    //   const data = this.signInForm.getRawValue();
    //   this.authenticationService.login(data).subscribe({
    //     next: resdata => {
    //       if (resdata.status) {
    //         // this.storageService.saveUser(resdata.data);
    //         if (this.inputData) {
    //           this.emitData.emit({status:'logged-in', next:'send-otp'});
    //         } else {
    //           this.router.navigate(['/auth/OTP']);
    //         }
    //       }
    //     },
    //     error: err => {
    //       console.log('Sign In Error ------------', err);
    //     }
    //   })
    // }


  }

}
