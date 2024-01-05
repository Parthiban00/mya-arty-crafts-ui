import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogComponent } from 'src/app/shared/component/dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'app-my-account-info',
  templateUrl: './my-account-info.component.html',
  styleUrls: ['./my-account-info.component.scss']
})
export class MyAccountInfoComponent {

  ref!: DynamicDialogRef;
  maximizable: string[] = ['orders-view'];

  constructor(public dialogService: DialogService, public messageService: MessageService) { }

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

    this.ref.onClose.subscribe((product: any) => {
      if (product) {
        //this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
      }
    });

    this.ref.onMaximize.subscribe((value) => {
      // this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
    });
  }



}
