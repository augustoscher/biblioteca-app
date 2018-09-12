import { Injectable } from "@angular/core";
import { Http, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { TOKEN_AUTH_USERNAME, TOKEN_AUTH_PASSWORD, TOKEN_NAME, TENANT } from "./auth.constants";
import { Usuario } from "../model/usuario";
import { LoginResult } from "../model/loginResult";

const URL_AUTH = 'http://localhost:8080/login';

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) {}
  
    login(username: string, password: string) {
    //   const body = `login=${encodeURIComponent(username)}&senha=${encodeURIComponent(password)}&grant_type=password`;
    // const body = {'login': username, 'senha': password}
  
    //   const headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
      let options = new RequestOptions();
      options.headers = new Headers();
      options.headers.append('Content-Type', 'application/json');

      let usuario = new Usuario();
      usuario.login = username;
      usuario.senha = password;

    //   headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));
    // this._http.post(url, JSON.stringify(params, jsonReplacer), options)
      return this.http.post(URL_AUTH, JSON.stringify(usuario), options)
        .map(res => res.json())
        .map((res: any) => {
          // console.log(res);
          if (res.access_token && res.tenant) {
            let loginResult = new LoginResult();
            loginResult.accesToken = res.access_token;
            loginResult.tenant = res.tenant;
            return loginResult;
          }
          return null;
        });
    }

    getToken() {
      return localStorage.getItem(TOKEN_NAME)
    }

    getTenant() {
      return localStorage.getItem(TENANT)
    }

}