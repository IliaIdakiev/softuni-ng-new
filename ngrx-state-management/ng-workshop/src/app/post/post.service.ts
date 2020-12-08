import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IPost } from '../shared/interfaces/post';

const apiUrl = environment.apiUrl;

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  loadPostList(themeId?: string, limit?: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(`/posts${limit ? `?limit=${limit}` : ''}`);
  }
}
