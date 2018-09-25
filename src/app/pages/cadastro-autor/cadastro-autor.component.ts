import { Component, OnInit, OnDestroy } from '@angular/core';
import { Autor } from '../../model/autor';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-cadastro-autor',
  templateUrl: './cadastro-autor.component.html',
  styleUrls: ['./cadastro-autor.component.scss']
})
export class CadastroAutorComponent implements OnInit, OnDestroy {

  private uuid: string;
  private sub: any;
  private autorSelected = new Autor();
  
  constructor(private _route: ActivatedRoute, 
    private _router: Router, 
    private _autorService: AutorService, 
    private _snackBar: MdSnackBar) { }

    ngOnInit() {
      this.autorSelected = new Autor();
      
      this.sub = this._route.params
        .subscribe(params => {
          this.uuid = params['uuid']; 
          if (this.uuid) {
            this._autorService.carregarAutoresCompleto(this.uuid)
              .subscribe(result => {
                this.autorSelected = result;
              });
          }
        });
    }
  
    gravar() {
      if (this.autorSelected.uuid) {
        this._autorService.alterar(this.autorSelected).subscribe(ob => {
            this._snackBar.open('Autor alterado com sucesso', 'OK', { duration: 3000 });
            this.voltar();
          },
          err => {
            this._snackBar.open('Erro ao alterar autor: ' + err.message, '', { duration: 3000 });
          });
      } else {
          this._autorService.incluir(this.autorSelected).subscribe(ob => {
            this._snackBar.open('Autor incluída com sucesso', 'OK', { duration: 3000 });
            this.voltar();
          },
          err => {
            this._snackBar.open('Erro ao incluir autor: ' + err.message, '', { duration: 3000 });
          });
      }      
    }
  
    voltar() {
      this._router.navigate(['/main/dashboard']);
    }
  
    get diagnostic() { return JSON.stringify(this.autorSelected); }
  
    ngOnDestroy() {
      this.sub.unsubscribe();
    }

}
