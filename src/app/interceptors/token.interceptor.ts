import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from "../services/authentication.service";
import { TENANT, TOKEN_NAME } from "../services/auth.constants";

@Injectable()
export class TokentInterceptor implements HttpInterceptor {

    constructor() {}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.getToken()}`,
                'tenant-uuid': this.getTenant()
            }
        });
        return next.handle(request);
    }

    getToken() {
        let token = localStorage.getItem(TOKEN_NAME);
        if (token) {
          return token;
        }
        return '';
    }

    getTenant() {
        let token = localStorage.getItem(TENANT);
        if (token) {
          return token;
        }
        return '';
    }
}