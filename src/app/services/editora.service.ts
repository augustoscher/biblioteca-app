import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/Observable";
import { Editora } from "../model/editora";


const URL_GET_EDITORAS = environment.urlGetEditoras;
const URL_GET_EDITORAS_ID = environment.urlGetEditorasById;
const URL_GET_EDITORAS_NOME = environment.urlGetEditorasByNome;
const URL_POST_EDITORAS = environment.urlPostEditoras;
const URL_PUT_EDITORAS = environment.urlPutEditoras;

@Injectable()
export class EditoraService {

    constructor(private _http: HttpClient) {}

    carregarEditoras(currentPage: any, pageSize: any) {
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
            .get<Editora[]>(URL_GET_EDITORAS, options)
            .catch(this.handleError);
    }

    carregarEditorasPor(searchTerm: string) {
        let httpHeaders = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');

        let options = {
            headers: httpHeaders,
        };   

        return this._http
            .get<Editora[]>(URL_GET_EDITORAS_NOME + searchTerm, options)
            .catch(this.handleError);
    }

    carregarEditoraCompleta(uuid: string) {
        return this._http
            .get<Editora[]>(URL_GET_EDITORAS_ID + uuid)
            .catch(this.handleError);
    }

    incluir(editora: Editora): Observable<Editora>{
        let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cache-Control', 'no-cache'); 

        let options = {
            headers: httpHeaders
        };        

        return this._http
            .post<Editora>(URL_POST_EDITORAS, editora, options)
            .catch(this.handleError);
    }

    alterar(editora: Editora): Observable<Editora>{
        let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cache-Control', 'no-cache'); 

        let options = {
            headers: httpHeaders
        };   

        return this._http
            .put<Editora>(URL_PUT_EDITORAS, editora, options)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}