import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/interfaces';
import { tap } from 'rxjs/operators';
import { IRootState } from '../+store';
import { Store } from '@ngrx/store';
import { updateUser } from '../+store/actions';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private store: Store<IRootState>
  ) { }

  getCurrentUserProfile(): Observable<any> {
    return this.http.get(`/users/profile`).pipe(
      tap((user: IUser) => this.store.dispatch(updateUser({ user })))
    );
  }

  updateProfile(data: any): Observable<IUser> {
    return this.http.put(`/users/profile`, data).pipe(
      tap((user: IUser) => this.store.dispatch(updateUser({ user })))
    );
  }
}
