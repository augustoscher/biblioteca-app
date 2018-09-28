import { Injectable } from "@angular/core";
import { Usuario } from "../model/usuario";
import { LoginResult } from "../model/loginResult";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const URL_AUTH = environment.urlAuth;

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) {}
  
    login(username: string, password: string) {
      let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json');
            // .set('Cache-Control', 'no-cache'); 

      let options = {
          headers: httpHeaders
      };       

      let usuario = new Usuario();
      usuario.login = username;
      usuario.senha = password;

      return this.http.post(URL_AUTH, usuario, options)
        // .map(res => res.json())
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
}