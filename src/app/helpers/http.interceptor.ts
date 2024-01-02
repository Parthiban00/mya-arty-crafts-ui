import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, finalize, switchMap } from 'rxjs/operators';

import { StorageService } from '../services/storage.service';
import { AuthenticationService } from '../authentication/authentication.service';

import { EventBusService } from '../services/event-bus.service';
import { EventData } from '../shared/classes/event-class';
import { HttpLoaderService } from '../shared/component/http-loader/http-loader.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private storageService: StorageService,
    private authService: AuthenticationService,
    private eventBusService: EventBusService,
    private httpLoaderService: HttpLoaderService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.httpLoaderService.show();

    request = request.clone({
      withCredentials: true,
    });

    return next.handle(request).pipe(
      catchError((error) => {

        if (
          error instanceof HttpErrorResponse &&
          !request.url.includes('sign-in') &&
          error.status === 401
        ) {
          // return this.handle401Error(request, next); // for refresh token - need to work
        }
        return throwError(() => error);
      }), finalize(() => this.httpLoaderService.hide())
    );

  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {

    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.storageService.isLoggedIn()) {
        return this.authService.refreshToken().pipe(
          switchMap(() => {
            this.isRefreshing = false;

            return next.handle(request);
          }),
          catchError((error) => {
            this.isRefreshing = false;

            if (error.status == '403') {
              this.eventBusService.emit(new EventData('logout', null));
            }

            return throwError(() => error);
          })
        );
      }
    }

    return next.handle(request);
  }

}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
