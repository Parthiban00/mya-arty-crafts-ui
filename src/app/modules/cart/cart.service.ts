import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebService } from '../../services/web.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private webservice: WebService) { }

  saveForLater(data: any): Observable<any> {
    return this.webservice.post('cart/saveForLater', data);
  }

  applyCoupon(data: any): Observable<any> {
    return this.webservice.post(`users/getCoupon`, data);
  }

  getShippingCharge(): Observable<any> {
    return this.webservice.get(`shipping/getShippingCharge`);
  }

}
