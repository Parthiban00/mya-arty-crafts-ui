import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class WebService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = environment.baseUrl;
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`, httpOptions);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload, httpOptions);
  }

  patch(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload, httpOptions);
  }

  delete(uri: string, payload: Object) {
    return this.http.get(`${this.ROOT_URL}/${uri}`, payload);
  }

}
