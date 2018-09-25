import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../../services/livro.service';
import { MdSnackBar } from '@angular/material';
import { Livro } from '../../model/livro';

@Component({
  selector: 'cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.scss']
})
export class CadastroLivroComponent implements OnInit {

  private uuid: string;
  private sub: any;
  private livroSelected = new Livro();
  
  constructor(private _route: ActivatedRoute, 
    private _router: Router, 
    private _livroService: LivroService, 
    private _snackBar: MdSnackBar) { }
  
  ngOnInit() {
    this.livroSelected = new Livro();
    
    this.sub = this._route.params
      .subscribe(params => {
        this.uuid = params['uuid']; 
        if (this.uuid) {
          this._livroService.carregarLivrosCompleto(this.uuid)
            .subscribe(result => {
              this.livroSelected = result;
            });
        }
      });
  }

  gravar() {
    if (this.livroSelected.uuid) {
      this._livroService.alterar(this.livroSelected).subscribe(ob => {
          this._snackBar.open('Livro alterado com sucesso', 'OK', { duration: 3000 });
          this.voltar();
        },
        err => {
          this._snackBar.open('Erro ao alterar livro: ' + err.message, '', { duration: 3000 });
        });
    } else {
        this._livroService.incluir(this.livroSelected).subscribe(ob => {
          this._snackBar.open('Livro incluído com sucesso', 'OK', { duration: 3000 });
          this.voltar();
        },
        err => {
          this._snackBar.open('Erro ao incluir livro: ' + err.message, '', { duration: 3000 });
        });
    }   
  }

  voltar() {
    this._router.navigate(['/main/dashboard']);
  }

  get diagnostic() { return JSON.stringify(this.livroSelected); }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
