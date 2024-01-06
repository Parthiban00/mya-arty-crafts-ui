import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { WebService } from '../../services/web.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private webservice: WebService) { }

  getBanner(): Observable<any> {
    return this.webservice.get('banner/getAll');
  }

  getOfferProducts(): Observable<any> {
    return this.webservice.get('products/getOfferProducts');
  }

  getBestSellingProducts(): Observable<any> {
    return this.webservice.get('products/getBestSellingProducts');
  }

  getChronicles(): Observable<any> {
    return this.webservice.get('reviews/getChronicles');
  }

  getHomeData(): Observable<any[]> {
    return forkJoin([
      this.getBanner(),
      this.getOfferProducts(),
      this.getBestSellingProducts(),
      this.getChronicles()
    ]);
  }
}
