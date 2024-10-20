import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubUser } from '../models/github-user';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  search(keyword: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this.apiUrl}/${keyword}`);
  }
}
