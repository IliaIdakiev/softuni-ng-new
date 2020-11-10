import { Inject, Injectable, InjectionToken, Provider } from '@angular/core';

export const API_URL_TOKEN = new InjectionToken('API_URL');

// export const MY_SERVICE = new InjectionToken('MY_SERVICE');

@Injectable({
  providedIn: 'root'
})
export class MyService {
  value = 123;
  constructor(@Inject(API_URL_TOKEN) apiURL) {
    console.log(apiURL);
  }
}

export const apiURLProvider: Provider = {
  provide: API_URL_TOKEN,
  useValue: 'http://localhost:4000/api/'
};

// export const myServiceProvider: Provider = {
//   provide: MY_SERVICE,
//   useClass: MyService
// };
