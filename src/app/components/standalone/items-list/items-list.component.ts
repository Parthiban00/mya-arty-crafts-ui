import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { Product } from 'src/app/shared/Interfaces/product.interface';
import { CommonService } from 'src/app/services/common.service';
import { CartService } from 'src/app/modules/cart/cart.service';
import { Subscription } from 'rxjs';
import { DynamicDialogComponent } from 'src/app/shared/component/dynamic-dialog/dynamic-dialog.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, PrimeNgModule],
  providers: [DialogService],
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {

  @Input('itemList') itemList!: Product[];
  @Input('from') from: string = '';
  ref!: DynamicDialogRef;

  subscriptions: Subscription[] = [];

  constructor(public dialogService: DialogService, private commonService: CommonService, private cartService: CartService) { }

  ngOnInit() { }

  saveToLater(product: Product) {
    const reqData = {
      productData: product,
      userInfo: JSON.parse(this.commonService.userDetails || '[]')
    }

    const saveToLaterApi = this.cartService.saveForLater(reqData).subscribe({
      next: resData => {
        if (resData.status) {
          this.commonService.showSuccess('Save To Later', 'Saved successfully...');
        } else {
          this.commonService.showError('Save To Later', 'Error saving this product!');
        }
      },
      error: err => {
        this.commonService.showError('Save To Later', 'Error saving this product!');
      },
      complete() {

      },
    })

    this.subscriptions.push(saveToLaterApi);
  }

  saveLater(product: Product) {
    if (this.commonService.isLoggedIn) {
      this.saveToLater(product)
    } else {
      this.show('Login', product, 'login');
    }
  }


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
      maximizable: false,
      data: passData
    });

    this.ref.onClose.subscribe((data: any) => {
      if (data) {
        this.saveToLater(data);
      }
    });

    this.ref.onMaximize.subscribe((value) => {

    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

}
