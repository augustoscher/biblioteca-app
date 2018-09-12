import { Injectable } from "@angular/core";
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from "../model/pessoa";

const URL_AUTH = 'http://localhost:8080/v1/pessoas';

@Injectable()
export class PessoaService {

    constructor(private _http: HttpClient) {}

    carregarPessoas() {
        return this._http
            .get<Pessoa[]>(URL_AUTH)
            // .map(response => {
            //     console.log(response);
            //     let json = response;
            //     return json;
            // })
            .catch(this.handleError);
            
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
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }

}
