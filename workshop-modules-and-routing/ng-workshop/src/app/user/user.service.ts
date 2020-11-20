import { Injectable } from '@angular/core';
import { StorageService } from '../core/storage.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class UserService {

  isLogged = false;

  constructor(private storage: StorageService) {
    this.isLogged = this.storage.getItem('isLogged');
  }

  login(data: any): Observable<any> {
    this.isLogged = true;
    this.storage.setItem('isLogged', true);
    return of(data).pipe(delay(3000));
  }

  logout(): Observable<any> {
    this.isLogged = false;
    this.storage.setItem('isLogged', false);
    return of(null).pipe(delay(3000));
  }
}
