import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost, ITheme } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemeList(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${apiUrl}/themes`, { withCredentials: true });
  }

  loadTheme(id: string): Observable<ITheme<IPost>> {
    return this.http.get<ITheme<IPost>>(`${apiUrl}/themes/${id}`, { withCredentials: true });
  }

  saveTheme(data: any): Observable<ITheme<any>> {
    return this.http.post<ITheme<any>>(`${apiUrl}/themes`, data, { withCredentials: true });
  }

}
