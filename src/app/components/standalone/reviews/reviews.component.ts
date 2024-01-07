import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { Review } from 'src/app/shared/Interfaces/product.interface';
import { CommonService } from 'src/app/services/common.service';
import { DialogService, DynamicDialogComponent, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule],
  providers: [DialogService],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  @Input('data') reviews!: Review | any;
  rating: number = 5;
  ref!: DynamicDialogRef;

  get ratingAverage() {
    this.rating = this.reviews && this.reviews.length ? this.commonService.calculateAverageOfRating(this.reviews) : 5;
    return this.reviews && this.reviews.length ? this.commonService.calculateAverageOfRating(this.reviews) : 5;
  }

  constructor(public commonService: CommonService, public dialogService: DialogService,) { }

  show(title: string, data: any, dialogFor: string) {
    // const passData = {
    //   data,
    //   dialogFor
    // }

    // this.ref = this.dialogService.open(DynamicDialogComponent, {
    //   header: title,
    //   width: '70%',
    //   contentStyle: { overflow: 'auto' },
    //   baseZIndex: 10000,
    //   maximizable: false,
    //   data: passData
    // });

    // this.ref.onClose.subscribe((data: any) => {
    //   if (data) {
    //     console.log('review ', data);
    //   }
    // });

    // this.ref.onMaximize.subscribe((value) => {

    // });
  }
}
