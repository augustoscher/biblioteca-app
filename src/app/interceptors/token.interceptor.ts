import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from "../services/authentication.service";

@Injectable()
export class TokentInterceptor implements HttpInterceptor {

    constructor(public auth: AuthenticationService) {}
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${this.auth.getToken()}`,
            'tenant-uuid': this.auth.getTenant()
        }
        });
        return next.handle(request);
    }
}