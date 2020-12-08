import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost, ITheme } from '../shared/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemeList(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`/themes`);
  }

  loadTheme(id: string): Observable<ITheme<IPost>> {
    return this.http.get<ITheme<IPost>>(`/themes/${id}`);
  }

  saveTheme(data: any): Observable<ITheme<any>> {
    return this.http.post<ITheme<any>>(`/themes`, data);
  }

}
