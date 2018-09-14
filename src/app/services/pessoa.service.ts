import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pessoa } from "../model/pessoa";

// const URL_AUTH = 'http://localhost:8080/v1/pessoas';
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

    // incluir(pessoa: Pessoa): Observable<any>{
    //     return this._backendService.post(URL_POST_FILIAIS, filial);
    // }
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
        // return this._backendService.put(URL_PUT_PESSOA, filial.id, filial);
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



    // post(url: string, params: any, jsonReplacer?: any) : Observable<any> {
    //     let options = new Options();
    //     options.headers = new HttpHeaders();
    //     options.headers.append("Accept", 'application/json');
    //     options.headers.append('Content-Type', 'application/json');

    //     return new Observable<any>(observer =>{
    //         this._http.post(url, JSON.stringify(params, jsonReplacer), options)
    //         .subscribe(object =>{
    //             observer.next(object);
    //             observer.complete();
    //         },
    //         err => {
    //             console.log(err);
    //             observer.error(err);
    //         });
    //     });
    // }



    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }
    
    // get(url: string, params?: URLSearchParams) : Observable<any> {
    //     return this._http
    //     .get(url, { params: params })
    //     .map(response => {
    //         let json = response.json();
    //         return json;
    //     })
    //     .catch(this.handleError);
    // }
}
