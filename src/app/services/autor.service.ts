import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/Observable";
import { Autor } from "../model/autor";

const URL_GET_AUTORES = environment.urlGetAutores;
const URL_GET_AUTORES_ID = environment.urlGetAutoresById;
const URL_POST_AUTOR = environment.urlPostAutores;
const URL_PUT_AUTORES = environment.urlPutAutores;

@Injectable()
export class AutorService {

    constructor(private _http: HttpClient) {}

    carregarAutores() {
        return this._http
            .get<Autor[]>(URL_GET_AUTORES)
            .catch(this.handleError);
    }

    carregarAutoresCompleto(uuid: string) {
        return this._http
            .get<Autor[]>(URL_GET_AUTORES_ID + uuid)
            .catch(this.handleError);
    }

    incluir(autor: Autor): Observable<Autor>{
        let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cache-Control', 'no-cache'); 

        let options = {
            headers: httpHeaders
        };        

        return this._http
            .post<Autor>(URL_POST_AUTOR, autor, options)
            .catch(this.handleError);
    }

    alterar(autor: Autor): Observable<Autor>{
        let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cache-Control', 'no-cache'); 

        let options = {
            headers: httpHeaders
        };   

        return this._http
            .put<Autor>(URL_PUT_AUTORES, autor, options)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}