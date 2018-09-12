import {Injectable} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';
import { TOKEN_NAME, TENANT } from './auth.constants';
import { LoginResult } from '../model/loginResult';


@Injectable()
export class UserService {
  jwtHelper: JwtHelper = new JwtHelper();
  accessToken: string;
  tenant: string;
  // isAdmin: boolean;

  constructor() {
  }

  login(result: LoginResult) {
    const decodedToken = this.jwtHelper.decodeToken(result.accesToken);
    console.log("decodedToken: " + decodedToken);
    // this.isAdmin = decodedToken.authorities.some(el => el === 'ADMIN_USER');
    this.accessToken = result.accesToken;
    this.tenant = result.tenant;
    localStorage.setItem(TOKEN_NAME, result.accesToken);
    localStorage.setItem(TENANT, result.tenant);
  }

  // login(accessToken: string) {
  //   const decodedToken = this.jwtHelper.decodeToken(accessToken);
  //   console.log(decodedToken);

  //   // this.isAdmin = decodedToken.authorities.some(el => el === 'ADMIN_USER');
  //   this.accessToken = accessToken;

  //   localStorage.setItem(TOKEN_NAME, accessToken);
  // }

  logout() {
    // this.isAdmin = false;
    this.accessToken = null;
    this.tenant = null;
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem(TENANT);
  }

  // isAdminUser(): boolean {
  //   return this.isAdmin;
  // }

  isUser(): boolean {
    return this.accessToken != null;
  }
}