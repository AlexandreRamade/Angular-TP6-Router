import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) { }

  private user: User;
  public repos: Array<string>;

  findUserByLogin(login: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.api.getUser(login)
        .subscribe((result: any) => {
          this.user = new User(result.login, result.type, result.company, result.bio, result.location, result.avatar_url, result.repos_url, result.followers);
          let copyUser = { ...this.user }

          this.findRepos(result.login).then((item) => {
            this.repos = item;
          });
          resolve(copyUser);
        }, () => {
          reject('Erreur findUserWithLogin dans UserService')
        });
    });
  }

  findRepos(login: string): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
      this.api.getRepos(login)
        .subscribe((result: any) => {
          this.repos = result.map(r => r.name);
          console.log('Login Repos :', login);
          console.log(this.repos);
          resolve([...this.repos]);
        }, () => {
          reject('Erreur findRepos dans ReposService')
        });
    });
  }

}
