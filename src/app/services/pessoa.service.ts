import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pessoa } from "../model/pessoa";

const URL_GET_PESSOAS = environment.urlGetPessoas;
const URL_GET_PESSOAS_ID = environment.urlGetPessoasById;
const URL_POST_PESSOAS = environment.urlPostPessoas;
const URL_PUT_PESSOAS = environment.urlPutPessoas;

@Injectable()
export class PessoaService {

    constructor(private _http: HttpClient) {}

    carregarPessoas() {
        return this._http
            .get<Pessoa[]>(URL_GET_PESSOAS)
            .catch(this.handleError);
    }

    carregarPessoaCompleta(uuid: string) {
        return this._http
            .get<Pessoa[]>(URL_GET_PESSOAS_ID + uuid)
            .catch(this.handleError);
    }

    incluir(pessoa: Pessoa): Observable<Pessoa>{
        let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cache-Control', 'no-cache'); 

        let options = {
            headers: httpHeaders
        };        

        return this._http
            .post<Pessoa>(URL_POST_PESSOAS, pessoa, options)
            .catch(this.handleError);
    }

    alterar(pessoa: Pessoa): Observable<Pessoa>{
        let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cache-Control', 'no-cache'); 

        let options = {
            headers: httpHeaders
        };   

        return this._http
            .put<Pessoa>(URL_PUT_PESSOAS, pessoa, options)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}
