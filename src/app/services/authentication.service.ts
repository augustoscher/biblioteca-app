import { Injectable } from "@angular/core";
import { Http, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { TOKEN_NAME, TENANT } from "./auth.constants";
import { Usuario } from "../model/usuario";
import { LoginResult } from "../model/loginResult";
import { environment } from "../../environments/environment";

const URL_AUTH = environment.urlAuth;

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) {}
  
    login(username: string, password: string) {
      let options = new RequestOptions();
      options.headers = new Headers();
      options.headers.append('Content-Type', 'application/json');

      let usuario = new Usuario();
      usuario.login = username;
      usuario.senha = password;

      return this.http.post(URL_AUTH, JSON.stringify(usuario), options)
        .map(res => res.json())
        .map((res: any) => {
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
      let token = localStorage.getItem(TOKEN_NAME);
      if (token) {
        return token;
      }
      return '';
    }

    getTenant() {
      let tenant = localStorage.getItem(TENANT);
      if (tenant){
        return tenant;
      }
      return '';
    }

}