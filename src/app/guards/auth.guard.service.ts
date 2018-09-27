import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { TOKEN_NAME } from "../services/auth.constants";
import { tokenNotExpired } from "angular2-jwt";
import { AuthenticationService } from "../services/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private router: Router,
      private _auth: AuthenticationService) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (tokenNotExpired(TOKEN_NAME, this._auth.getToken())) {
        return true;
      } else {
        this.router.navigate(['login'], {queryParams: {redirectTo: state.url}});
        return false;
      }
    }
}