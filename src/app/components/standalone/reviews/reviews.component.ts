import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { Review } from 'src/app/shared/Interfaces/product.interface';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  @Input('data') reviews!: Review | any;
  rating: number = 5;


  get ratingAverage() {
    this.rating = this.reviews && this.reviews.length ? this.commonService.calculateAverageOfRating(this.reviews) : 5;
    return this.reviews && this.reviews.length ? this.commonService.calculateAverageOfRating(this.reviews) : 5;
  }

  constructor(public commonService: CommonService) { }
}
