import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonService } from 'src/app/services/common.service';
import { DynamicDialogComponent } from 'src/app/shared/component/dynamic-dialog/dynamic-dialog.component';
import { MyAccountService } from '../my-account.service';
import { Subscription } from 'rxjs';
import { MyAccountInfo } from 'src/app/shared/Interfaces/my-account.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account-info',
  templateUrl: './my-account-info.component.html',
  styleUrls: ['./my-account-info.component.scss']
})
export class MyAccountInfoComponent {

  ref!: DynamicDialogRef;
  maximizable: string[] = ['orders-view'];
  subscriptions: Subscription[] = [];
  myAccountInfo !: MyAccountInfo;

  constructor(public dialogService: DialogService, public messageService: MessageService, private commonService: CommonService, private myAccountService: MyAccountService, private router: Router) { }

  show(title: string, data: any, dialogFor: string) {

    const passData = {
      data,
      dialogFor
    }

    this.ref = this.dialogService.open(DynamicDialogComponent, {
      header: title,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: this.maximizable.includes(dialogFor),
      data: passData
    });

    this.ref.onClose.subscribe((data: any) => {
      if (data) {
        if (data.dialogFor === 'add-address') {
          this.addAddress(data.data.address);
        }
      }
    });

    this.ref.onMaximize.subscribe((value) => {

    });
  }

  addAddress(address: string) {
    const reqData = {
      userId: this.commonService.userId,
      address
    }

    const addAddressApi = this.myAccountService.addAddress(reqData).subscribe({
      next: resData => {
        if (resData.status) {
          this.commonService.showSuccess('Address', 'Added successfuly...');
          this.getAdresses();
        } else {
          this.commonService.showError('Address', 'Error adding address!');
        }
      },
      error: err => {
        this.commonService.showError('Address', 'Error adding address!');
      },
      complete() {

      },
    })

    this.subscriptions.push(addAddressApi);
  }

  getData() {
    const getDataApi = this.myAccountService.getAccountInfo().subscribe({
      next: resData => {
        if (resData.status) {
          this.myAccountInfo = resData.data;
        } else {
          this.commonService.showSuccess('My Account', 'Error fetching account info!');
        }
      },
      error: err => {
        this.commonService.showError('My Account', 'Error fetching account info!');
      },
      complete() {

      },
    })

    this.subscriptions.push(getDataApi);
  }

  getAdresses() {
    const getAddressApi = this.myAccountService.getAllAddresses().subscribe({
      next: resData => {
        if (resData.status) {
          this.myAccountInfo.addresses = resData.data;
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

  ngOnInit() {
    //dymmy data 
    this.myAccountInfo = {
      userInfo: { _id: '1', fullName: 'Parthi Ram', mobileNo: '988676756', email: 'parthi@gmail.com' },
      orders: {
        pending: [{
          totalAmount: 200.00, orderDate: new Date(), items: [{
            name: 'Product Name',
            tag: true,
            tagContent: 'SALE 30%',
            discount: 30,
            rating: 4,
            originalPrice: 400.00,
            actualPrice: 300.00,
            imageUrl: 'assets/images/category_1.jpg',
            _id: '1',
            quantity: 1,
            categoryId: '1',
            description:`  It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.`,
            price: { size: '3x6', price: 200.00 },
            prices:[{
              size:'2x4',
              price:200.00
            }]

          }]
        }],
        completed: [{
          totalAmount: 200.00, orderDate: new Date(), items: [{
            name: 'Product Name',
            tag: true,
            tagContent: 'SALE 30%',
            discount: 30,
            rating: 4,
            originalPrice: 400.00,
            actualPrice: 300.00,
            imageUrl: 'assets/images/category_1.jpg',
            _id: '1',
            quantity: 1,
            categoryId: '1',
            description:`  It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.`,
            price: { size: '3x6', price: 200.00 },
               prices:[{
        size:'2x4',
        price:200.00
      }]

          }]
        },
        {
          totalAmount: 200.00, orderDate: new Date(), items: [{
            name: 'Product Name',
            tag: true,
            tagContent: 'SALE 30%',
            discount: 30,
            rating: 4,
            originalPrice: 400.00,
            actualPrice: 300.00,
            imageUrl: 'assets/images/category_1.jpg',
            _id: '1',
            quantity: 1,
            categoryId: '1',
            description:`  It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.`,
            price: { size: '3x6', price: 200.00 },
               prices:[{
        size:'2x4',
        price:200.00
      }]

          }]
        },
        {
          totalAmount: 200.00, orderDate: new Date(), items: [{
            name: 'Product Name',
            tag: true,
            tagContent: 'SALE 30%',
            discount: 30,
            rating: 4,
            originalPrice: 400.00,
            actualPrice: 300.00,
            imageUrl: 'assets/images/category_1.jpg',
            _id: '1',
            quantity: 1,
            categoryId: '1',
            description:`  It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.`,
            price: { size: '3x6', price: 200.00 },
               prices:[{
        size:'2x4',
        price:200.00
      }]

          }]
        }],
        cancelled: [{
          totalAmount: 200.00, orderDate: new Date(), items: [{
            name: 'Product Name',
            tag: true,
            tagContent: 'SALE 30%',
            discount: 30,
            rating: 4,
            originalPrice: 400.00,
            actualPrice: 300.00,
            imageUrl: 'assets/images/category_1.jpg',
            _id: '1',
            quantity: 1,
            categoryId: '1',
            description:`  It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.`,
            price: { size: '3x6', price: 200.00 },
            prices:[{
              size:'2x4',
              price:200.00
            }]

          }]
        }]
      },
      addresses: [{ fullAddress: '223, Thamarakki Main Road, Idayamelur, Sivaganga pin-630562', default: true }, { fullAddress: '223, Thamarakki Main Road, Idayamelur, Sivaganga pin-630562', default: false }],
      coupons: [{ discount: 20, discountType: 'Percentage', description: 'Welcome Offer', validDate: new Date(), code: 'Welcome20' }, { discount: 50, discountType: 'Amount', description: 'Special Offer', validDate: new Date(), code: 'Special50' }],
      totalOrders: 5
    }

    this.getData();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  signOut(){
    this.commonService.showSuccess('Sign Out', 'Sign Out successfully...');
    localStorage.removeItem('userData');
    this.router.navigate(['/home']);
  }

}
