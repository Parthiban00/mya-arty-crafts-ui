import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebService } from '../../services/web.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private webservice: WebService) { }

  placeOrder(data: any): Observable<any> {
    return this.webservice.post('checkout/placeOrder', data);
  }
}
