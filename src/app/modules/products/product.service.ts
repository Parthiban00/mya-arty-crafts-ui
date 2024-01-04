import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebService } from '../../services/web.service'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private webservice: WebService) { }

  getData(data: any): Observable<any> {
    return this.webservice.post('products/getAll', data);
  }

  logout(): Observable<any> {
    return this.webservice.get('auth/signout');
  }
}
