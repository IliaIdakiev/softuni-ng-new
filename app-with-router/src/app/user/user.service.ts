import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  loadUsers(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  loadUser(id: number): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
