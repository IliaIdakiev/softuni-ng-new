import { Injectable, Provider } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { USE_BASE_URL } from '../shared/constants';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  apiUrl = environment.apiUrl;
  baseUrl = environment.baseUrl;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const withoutApiUrl = req.url.includes(USE_BASE_URL);
    if (withoutApiUrl) {
      req = req.clone({ url: `${this.baseUrl}${req.url.replace(`${USE_BASE_URL}/`, '')}` });
    }
    if (!withoutApiUrl && !req.url.includes('http')) {
      req = req.clone({ url: `${this.apiUrl}${req.url}`, withCredentials: true });
    }
    return next.handle(req);
  }
}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
};
