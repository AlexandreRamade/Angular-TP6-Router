import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  API_GIT_BASE_URL: string = 'https://api.github.com/users/';
  API_GIT_REPOS: string = '/repos';

  getUser(user: string) {
    return this.http.get(`${this.API_GIT_BASE_URL}${user}`);
  }

  getRepos(login: string) {
    return this.http.get(`${this.API_GIT_BASE_URL}${login}${this.API_GIT_REPOS}`);
  }
}
