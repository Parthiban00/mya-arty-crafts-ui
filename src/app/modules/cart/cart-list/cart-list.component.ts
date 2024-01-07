import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Product } from 'src/app/shared/Interfaces/product.interface';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  // items: any = [];
  totalPrice: number = 0;
  payableAmount: number = 0;
  shippingCharge: number = 0;
  subscriptions: Subscription[] = [];

  constructor(private commonService: CommonService, private cartService: CartService, private router: Router) { }

  get cartData() {
    const cart: Product[] | any = this.commonService.cartData;
    return JSON.parse(cart);
  }

  ngOnInit() {
    this.cumulativePrice();
    this.getShippingCharges();
  }

  cumulativePrice() {
    if (this.cartData) {
      this.totalPrice = this.cartData.reduce((sum: number, product: Product) => sum + (product.price?.price || 0), 0);
      this.totalPayableAmount();
    }
  }
  
  totalPayableAmount() {
    this.payableAmount = this.totalPrice + this.shippingCharge;
  }

  getShippingCharges() {
    const getShippingChargeApi = this.cartService.getShippingCharge().subscribe({
      next: resData => {
        if (resData.status) {
          this.shippingCharge = resData.data.charge;
        } else {
          this.commonService.showError('Cart', 'Error fetching shipping charge data!');
        }
      },
      error: err => {
        this.commonService.showError('Cart', 'Error fetching shipping charge data!');
      },
      complete() {

      },
    })

    this.subscriptions.push(getShippingChargeApi);
  }

  saveToLater() {
    const reqData = {
      cartData: this.cartData,
      userInfo: JSON.parse(this.commonService.userDetails || '[]')
    }

    this.router.navigate(['/home']);

    // const saveToLaterApi = this.cartService.saveForLater(reqData).subscribe({
    //   next: resData => {
    //     if (resData.status) {
    //        this.commonService.showSuccess('Cart', 'Products saved to later successfully...');
    // this.router.navigate(['/home']);
    //     } else {
    //       this.commonService.showError('Cart', 'Error while saving this cart!');
    //     }
    //   },
    //   error: err => {
    //     this.commonService.showError('Cart', 'Error while saving this cart!');
    //   },
    //   complete() {

    //   },
    // })

    // this.subscriptions.push(saveToLaterApi);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  proceedToCheckOut(){
    const checkOutData= {
      payableAmount: this.payableAmount,
      totalPrice:this.totalPrice,
      items:this.cartData
    }

    localStorage.setItem('checkOutData',JSON.stringify(checkOutData));
    this.router.navigate(['/checkout'])
  }

}
