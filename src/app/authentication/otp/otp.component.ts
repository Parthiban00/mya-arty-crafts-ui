import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OTPComponent {
  otp: string = '';
  showOtpComponent = true;
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private storageService: StorageService, private router: Router) {
  }


  onOtpChange(otp: any) {
    this.otp = otp;
  }

  ngOnInit() {

  }

  signIn() {
    const defaultUerInfo ={
      _id: '1',
      fullName: 'ParthiRam',
      email: 'parthi@gmail.com',
      mobileNo: '9076767878',
    }

    localStorage.setItem('userData',JSON.stringify(defaultUerInfo));
    this.router.navigate(['']);

    // if (this.signInForm.valid) {

    //   const data = this.signInForm.getRawValue();
    //   this.authenticationService.login(data).subscribe({
    //     next: resdata => {
    //       if (resdata.status) {
            // // this.storageService.saveUser(resdata.data);
            // localStorage.setItem('userData',JSON.stringify(resdata.data));
            // this.router.navigate(['/home']);
    //       }
    //     },
    //     error: err => {
    //       console.log('Sign In Error ------------', err);
    //     }
    //   })
    // }


  }

}
