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

  get checkOutData() {
    const checkOutData: any = this.commonService.checkOutData;
    return JSON.parse(checkOutData);
  }

  constructor(private commonService: CommonService, private myAccountService: MyAccountService, private checkoutService: CheckoutService, private router: Router) { }

  ngOnInit() {
    this.getAdresses();
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
    const reqData = {
      ...this.checkOutData,
      userId: this.commonService.userId
    }

    this.commonService.showSuccess('Checkout', 'Order placed successfully!');
    this.router.navigate(['/home']);

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
}
