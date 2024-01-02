import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, share } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpLoaderService {

  private loaderVisible = new BehaviorSubject<boolean>(false);

  constructor() { }

  show() {
    this.loaderVisible.next(true);
  }

  hide() {
    this.loaderVisible.next(false);
  }

  isVisible(): Observable<boolean> {
    return this.loaderVisible.asObservable().pipe(share());
  }
}
