import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/Observable";
import { Livro } from "../model/livro";

const URL_GET_LIVROS = environment.urlGetLivros;
const URL_GET_LIVROS_ID = environment.urlGetLivrosById;
const URL_GET_LIVROS_TITULO = environment.urlGetLivrosByTitulo;
const URL_POST_LIVROS = environment.urlPostLivros;
const URL_PUT_LIVROS = environment.urlPutLivros;

@Injectable()
export class LivroService {

    constructor(private _http: HttpClient) {}

    carregarLivros(currentPage: any, pageSize: any) {
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
            .get<Livro[]>(URL_GET_LIVROS, options)
            .catch(this.handleError);
    }

    carregarLivrosPor(searchTerm: string){
        let httpHeaders = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');

        let options = {
            headers: httpHeaders,
        };   

        return this._http
            .get<Livro[]>(URL_GET_LIVROS_TITULO + searchTerm, options)
            .catch(this.handleError);
    }

    carregarLivrosCompleto(uuid: string) {
        return this._http
            .get<Livro[]>(URL_GET_LIVROS_ID + uuid)
            .catch(this.handleError);
    }

    incluir(livro: Livro): Observable<Livro>{
        let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cache-Control', 'no-cache'); 

        let options = {
            headers: httpHeaders
        };        

        return this._http
            .post<Livro>(URL_POST_LIVROS, livro, options)
            .catch(this.handleError);
    }

    alterar(livro: Livro): Observable<Livro>{
        let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cache-Control', 'no-cache'); 

        let options = {
            headers: httpHeaders
        };   

        return this._http
            .put<Livro>(URL_PUT_LIVROS, livro, options)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}