import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { MyAccountService } from 'src/app/modules/my-account/my-account.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.scss']
})
export class DynamicDialogComponent {

  items: any = [{}]
  dialogFor: string = '';
  address: string = '';
  review: string = '';
  rating: number = 5;
  subscriptions: Subscription[] = [];
  userFor: string = 'signin';

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, public ref: DynamicDialogRef, public config: DynamicDialogConfig, private myAccountService: MyAccountService, private commonService: CommonService, private router: Router) {

  }

  ngOnInit() {
    // Access the data property to get the passed data
    const passedData = this.config.data;
    this.dialogFor = this.config.data.dialogFor;
    console.log('Passed Data:', passedData);
    if(this.dialogFor !== 'login' && this.dialogFor !== 'add-review' )
    this.items = passedData.data[0].items;
  }

  submit() {
    const submitData = {
      dialogFor: this.dialogFor,
      data: this.dialogFor === 'add-review' ? { review: this.review, rating:this.rating } : { address: this.address }
    }

    this.ref.close(submitData);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  signInData(ev: any) {
    console.log(ev);
    if(ev.next === 'sign-up'){
      this.userFor = 'signup';
    } else {
      this.userFor = 'otp';
    }
  }

  signUpData(ev: any) {
    console.log(ev);
    this.userFor = 'signin';
  }

  otpData(ev: any) {
    console.log(ev);
    this.ref.close();
  }


}
