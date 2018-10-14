import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Estatistica } from "../model/estatistica";
import { Observable } from "rxjs/Observable";

const URL_GET_ESTATISTICA = environment.urlGetEstatistica;

@Injectable()
export class DashboardService {

    constructor(private _http: HttpClient) {}

    carregarEstatisticas() {
        return this._http
            .get<Estatistica[]>(URL_GET_ESTATISTICA)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}