import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebService } from '../../services/web.service'
import { CommonService } from 'src/app/services/common.service';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  constructor(private webservice: WebService, private commonService: CommonService) { }

  addAddress(data: any): Observable<any> {
    return this.webservice.post('my-account/addAddress', data);
  }

  getAllAddresses(): Observable<any> {
    return this.webservice.get(`my-account/getAllAddress/${this.commonService.userId}`);
  }

  getAccountInfo(): Observable<any> {
    return this.webservice.get(`my-account/getAccountInfo/${this.commonService.userId}`);
  }
}