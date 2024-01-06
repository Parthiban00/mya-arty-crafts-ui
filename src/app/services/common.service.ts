import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Review } from '../shared/Interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  get isLoggedIn() {
    return localStorage.getItem('userData') ? true : false;
  }

  get userDetails() {
    return localStorage.getItem('userData') ? localStorage.getItem('userData') : null;
  }


  get userId(): string {
    return localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') || '[]')._id : null;
  }

  constructor(private messageService: MessageService) { }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showSuccess(summary: string, detail: string) {
    this.messageService.add({ severity: 'success', summary, detail });
  }

  showInfo(summary: string, detail: string) {
    this.messageService.add({ severity: 'info', summary, detail });
  }

  showWarn(summary: string, detail: string) {
    this.messageService.add({ severity: 'warn', summary, detail });
  }

  showError(summary: string, detail: string) {
    this.messageService.add({ severity: 'error', summary, detail });
  }

  originalPrice(actualPrice: number, discountPercentage: number) {
    return ((discountPercentage / 100) * actualPrice) + actualPrice;
  }

  calculateAverageOfRating(reviews: Review[]) {
    // Calculate the sum of ratings
    const sumOfRatings = reviews.reduce((acc, { rating }) => acc + rating, 0);

    // Calculate the average rating
    return sumOfRatings / reviews.length;
  }
}
