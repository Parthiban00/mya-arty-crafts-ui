import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {WebService} from '../services/web.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private webservice:WebService) { }

  login(signInData:any):Observable<any> {
    const data = signInData;
    return this.webservice.post('auth/signin',data);
  }

  register(username: string, email: string, password: string):Observable<any>{
    const data={
      username:username,
      email:email,
      password:password
    }
    return this.webservice.post('registerUser',data);
  }

  logout():Observable<any>{
    return this.webservice.get('auth/signout');
  }

  refreshToken() {
    return this.webservice.post('refreshToken',{});
  }
}
