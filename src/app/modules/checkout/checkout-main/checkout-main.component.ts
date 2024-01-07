import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { WebService } from 'src/app/services/web.service';
import { MyAccountService } from '../../my-account/my-account.service';
import { Address } from 'src/app/shared/Interfaces/my-account.interface';
import { Subscription } from 'rxjs';
import { CheckoutService } from '../checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-main',
  templateUrl: './checkout-main.component.html',
  styleUrls: ['./checkout-main.component.scss']
})
export class CheckoutMainComponent {
  selectedPayOption: string = 'cod';
  addresses!: Address[];
  subscriptions: Subscription[] = [];
  stepLabel: string = '';
  userFor = 'signup';

  get userData() {
    return JSON.parse(this.commonService.userDetails || '[]');
  }

  activeIndex: number = 0;

  items: any[] = [];

  nextStep() {
    this.activeIndex++;
    this.stepLabel = this.items[this.activeIndex].label;
  }

  prevStep() {
    this.activeIndex--;
    this.stepLabel = this.items[this.activeIndex].label;
  }

  get checkOutData() {
    const checkOutData: any = this.commonService.checkOutData;
    return JSON.parse(checkOutData);
  }

  constructor(private commonService: CommonService, private myAccountService: MyAccountService, private checkoutService: CheckoutService, private router: Router) { }

  ngOnInit() {
    this.getAdresses();


    if (this.commonService.isLoggedIn) {
      this.stepLabel = 'Info';

      this.items = [
        {
          label: 'Info',
          command: (event: any) => {
            this.stepLabel = 'Info';
          }
        },
        {
          label: 'Address',
          command: (event: any) => {
            this.stepLabel = 'Address';
          }
        },
        {
          label: 'Payment',
          command: (event: any) => {
            this.stepLabel = 'Payment';
          }
        },
        {
          label: 'Confirmation',
          command: (event: any) => {
            this.stepLabel = 'Confirmation';
          }
        }
      ];
    } else {
      this.stepLabel = 'Register';

      this.items = [
        {
          label: 'Register',
          command: (event: any) => {
            this.stepLabel = 'Register';
          }
        },
        {
          label: 'Address',
          command: (event: any) => {
            this.stepLabel = 'Address';
          }
        },
        {
          label: 'Payment',
          command: (event: any) => {
            this.stepLabel = 'Payment';
          }
        },
        {
          label: 'Confirmation',
          command: (event: any) => {
            this.stepLabel = 'Confirmation';
          }
        }
      ];
    }

  }

  getAdresses() {

    //dummy data
    this.addresses = [{ fullAddress: '223, Thamarakki Main Road, Idayamelur, Sivaganga pin-630562', default: true }, { fullAddress: '223, Thamarakki Main Road, Idayamelur, Sivaganga pin-630562', default: false }];

    const getAddressApi = this.myAccountService.getAllAddresses().subscribe({
      next: resData => {
        if (resData.status) {
          this.addresses = resData.data;
        } else {
          this.commonService.showSuccess('Address', 'Error fetching addresses!');
        }
      },
      error: err => {
        this.commonService.showError('Address', 'Error fetching addresses!');
      },
      complete() {

      },
    })

    this.subscriptions.push(getAddressApi);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });

    localStorage.removeItem('checkOutData');
  }

  placeOrder() {
    if (this.commonService.userId) {
      const reqData = {
        ...this.checkOutData,
        userId: this.commonService.userId
      }
  
      this.commonService.showSuccess('Checkout', 'Order placed successfully!');
      this.router.navigate(['/home']);

    } else {
      this.activeIndex = 0;
      this.stepLabel = 'Register';
    }


    // const placeOrderApi = this.checkoutService.placeOrder(reqData).subscribe({
    //   next: resData => {
    //     if (resData.status) {
    //       this.commonService.showSuccess('Checkout', 'Order placed successfully!');
    //       this.router.navigate(['/home']);
    //     } else {
    //       this.commonService.showError('Checkout', 'Error fetching addresses!');
    //     }
    //   },
    //   error: err => {
    //     this.commonService.showError('Checkout', 'Error fetching addresses!');
    //   },
    //   complete() {

    //   },
    // })

    // this.subscriptions.push(placeOrderApi);
  }

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  signInData(ev: any) {
    console.log(ev);
    if (ev.next === 'sign-up') {
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
    this.ngOnInit();
  }
}
