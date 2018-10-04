import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Emprestimo } from "../model/emprestimo";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";

const URL_GET_EMPRESTIMOS = environment.urlGetEmprestimos;
const URL_GET_EMPRESTIMOS_ID = environment.urlGetEmprestimosById;
const URL_POST_EMPRESTIMOS = environment.urlPostEmprestimos;
const URL_PUT_EMPRESTIMOS = environment.urlPutEmprestimos;

@Injectable()
export class EmprestimoService {

    constructor(private _http: HttpClient) {}

    carregarEmprestimos(currentPage: any, pageSize: any) {
        let httpHeaders = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');

        let httpParams = new HttpParams()
        .set('page', currentPage)
        .set('size', pageSize);
        // .set('sort', sortBy);

        let options = {
            headers: httpHeaders,
            params: httpParams
        };   

        return this._http
            .get<Emprestimo[]>(URL_GET_EMPRESTIMOS, options)
            .catch(this.handleError);
    }

    carregarEmprestimosPor(searchTerm: string) {
        let httpHeaders = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');

        let options = {
            headers: httpHeaders,
        };   

        return this._http
            .get<Emprestimo[]>(URL_GET_EMPRESTIMOS, options)
            .catch(this.handleError);
    }

    carregarEmprestimosCompleto(uuid: string) {
        return this._http
            .get<Emprestimo[]>(URL_GET_EMPRESTIMOS_ID + uuid)
            .catch(this.handleError);
    }

    incluir(emprestimos: Emprestimo): Observable<Emprestimo>{
        let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cache-Control', 'no-cache'); 

        let options = {
            headers: httpHeaders
        };        

        return this._http
            .post<Emprestimo>(URL_POST_EMPRESTIMOS, emprestimos, options)
            .catch(this.handleError);
    }

    alterar(emprestimos: Emprestimo): Observable<Emprestimo>{
        let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cache-Control', 'no-cache'); 

        let options = {
            headers: httpHeaders
        };   

        return this._http
            .put<Emprestimo>(URL_PUT_EMPRESTIMOS, emprestimos, options)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}