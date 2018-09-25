import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Turma } from "../model/turma";
import { Observable } from "rxjs/Observable";


const URL_GET_TURMAS = environment.urlGetTurmas;
const URL_GET_TURMAS_ID = environment.urlGetTurmasById;
const URL_POST_TURMAS = environment.urlPostTurmas;
const URL_PUT_TURMAS = environment.urlPutTurmas;

@Injectable()
export class TurmaService {

    constructor(private _http: HttpClient) {}

    carregarTurmas() {
        return this._http
            .get<Turma[]>(URL_GET_TURMAS)
            .catch(this.handleError);
    }

    carregarTurmaCompleta(uuid: string) {
        return this._http
            .get<Turma[]>(URL_GET_TURMAS_ID + uuid)
            .catch(this.handleError);
    }

    incluir(turma: Turma): Observable<Turma>{
        let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cache-Control', 'no-cache'); 

        let options = {
            headers: httpHeaders
        };        

        return this._http
            .post<Turma>(URL_POST_TURMAS, turma, options)
            .catch(this.handleError);
    }

    alterar(turma: Turma): Observable<Turma>{
        let httpHeaders = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cache-Control', 'no-cache'); 

        let options = {
            headers: httpHeaders
        };   

        return this._http
            .put<Turma>(URL_PUT_TURMAS, turma, options)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}