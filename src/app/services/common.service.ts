import { Injectable } from '@angular/core';

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

  constructor() { }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
