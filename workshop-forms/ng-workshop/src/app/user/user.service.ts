import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
import { catchError, tap } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable()
export class UserService {

  currentUser: IUser | null;

  get isLogged(): boolean { return !!this.currentUser; }

  constructor(private http: HttpClient) { }

  getCurrentUserProfile(): Observable<any> {
    return this.http.get(`${apiUrl}/users/profile`, { withCredentials: true }).pipe(
      tap(((user: IUser) => this.currentUser = user)),
      catchError(() => { this.currentUser = null; return of(null); })
    );
  }

  login(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/users/login`, data, { withCredentials: true }).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }

  register(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/users/register`, data, { withCredentials: true }).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${apiUrl}/users/logout`, {}, { withCredentials: true }).pipe(
      tap(() => this.currentUser = null)
    );
  }

  updateProfile(data: any): Observable<IUser> {
    return this.http.put(`${apiUrl}/users/profile`, data, { withCredentials: true }).pipe(
      tap((user: IUser) => this.currentUser = user)
    );
  }
}
