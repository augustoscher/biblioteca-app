import {Injectable} from '@angular/core';
import { TOKEN_NAME, TENANT, USER, RULE } from './auth.constants';
import { LoginResult } from '../model/loginResult';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';

const URL_GET_USUARIO_LOGIN = environment.urlGetUsuarioLogin;

@Injectable()
export class UserService {
  
  constructor(private _http: HttpClient) {}

  login(login: string, result: LoginResult) {
    localStorage.setItem(TOKEN_NAME, result.accesToken);
    
    this.carregarUsuarioCompleto(login)
      .subscribe(data => {
        localStorage.setItem(USER, data.nome);
        localStorage.setItem(RULE, data.admin ? '1' : '0');
      });
    //proposital, pois os usuarios estão no tenant da plataforma.
    localStorage.setItem(TENANT, result.tenant);
  }

  carregarUsuarioCompleto(login: string) {
    return this._http
        .get<Usuario[]>(URL_GET_USUARIO_LOGIN + login)
        .catch(this.handleError);
  }

  logout() {
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem(TENANT);
    localStorage.removeItem(USER);
    localStorage.removeItem(RULE);
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

  getUser() {
    let user = localStorage.getItem(USER)
    if (user) {
      return user;
    }
    return null;
  }

  getRule() {
    let rule = localStorage.getItem(RULE);
    if (rule) {
      if (rule == '1') {
        return 'Administrador';
      }
      return 'Usuário';
    }
    return null;
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
}