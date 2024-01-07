import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
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
  subscriptions: Subscription[] = [];

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, private myAccountService: MyAccountService, private commonService: CommonService) { }

  ngOnInit() {
    // Access the data property to get the passed data
    const passedData = this.config.data;
    this.dialogFor = this.config.data.dialogFor;
    console.log('Passed Data:', passedData);
    this.items = passedData.data[0].items;
  }

  submit() {
    const submitData = {
      dialogFor: this.dialogFor,
      data: { address: this.address }
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

}
