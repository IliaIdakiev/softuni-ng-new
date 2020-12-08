import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap, map } from 'rxjs/operators';
import { IRootState } from '../+store';
import { IUser } from '../shared/interfaces';
import { login, register, authenticate, logout } from '../+store/actions';

@Injectable()
export class AuthService {

  currentUser$ = this.store.select((state) => state.auth.currentUser);
  isLogged$ = this.currentUser$.pipe(map(currentUser => currentUser !== null));
  isReady$ = this.currentUser$.pipe(map(currentUser => currentUser !== undefined));

  constructor(
    private http: HttpClient,
    private store: Store<IRootState>
  ) { }

  login(data: any): Observable<any> {
    return this.http.post(`/users/login`, data).pipe(
      tap((user: IUser) => this.store.dispatch(login({ user })))
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(`/users/register`, data).pipe(
      tap((user: IUser) => this.store.dispatch(register({ user })))
    );
  }

  logout(): Observable<any> {
    return this.http.post(`/users/logout`, {}).pipe(
      tap((user: IUser) => this.store.dispatch(logout()))
    );
  }

  authenticate(): Observable<any> {
    return this.http.get(`/users/profile`).pipe(
      tap((user: IUser) => this.store.dispatch(authenticate({ user }))),
      catchError(() => {
        this.store.dispatch(authenticate({ user: null }));
        return [null];
      })
    );
  }
}
