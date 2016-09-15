import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {
  token: string;

  constructor(private http: Http) {}

  sendCredentials(model) {
    let tokenUrl = 'http://localhost:8080/user/login';
    let header = new Headers({'Content-type': 'application/json'});

    return this.http.post(tokenUrl, JSON.stringify(model), {headers: header});
  }

  sendToken(token) {
    let userUrl = 'http://localhost:8080/user/users';
    let header = new Headers({'Authorization': 'Bearer ' + token});

    return this.http.get(userUrl, {headers: header});
  }
}