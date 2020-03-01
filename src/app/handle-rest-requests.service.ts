import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HandleRestRequestsService {
  userRepositoryUrl="https://api.github.com/users/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private http: HttpClient) { }
  
  getUserRepositories(user){
    let url=`${this.userRepositoryUrl}${user}/repos`;
    return this.http.get(url);
  }
  getBranches(user,repository){
    let url=`https://api.github.com/repos/${user}/${repository}/branches`;
    return this.http.get(url);
  }
  getCommits(user,repository){
    let url=`https://api.github.com/repos/${user}/${repository}/commits`;
    return this.http.get(url);
  }
}
