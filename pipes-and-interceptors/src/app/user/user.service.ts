import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

const initialState = {
  user: undefined,
  userList: null
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentState = initialState;
  private state$ = new BehaviorSubject(this.currentState);

  userList$ = this.state$.pipe(
    map(state => state.userList),
    distinctUntilChanged()
  );

  user$ = this.state$.pipe(
    map(state => state.user),
    distinctUntilChanged()
  );

  constructor(private http: HttpClient) { }

  loadUsers(): void {
    const newState = { ...this.currentState, userList: null };
    this.state$.next(newState);
    this.http.get<any>('/users').subscribe({
      next: (userList) => {
        const newStateWithUsers = { ...this.currentState, userList };
        this.state$.next(newStateWithUsers);
      }
    });
  }

  loadUser(id: number): void {
    const newState = { ...this.currentState, user: null };
    this.state$.next(newState);
    this.http.get<any>('/users').subscribe({
      next: (user) => {
        const newStateWithUser = { ...this.currentState, user };
        this.state$.next(newStateWithUser);
      }
    });
  }
}
