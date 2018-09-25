import { PessoaService } from './../../services/pessoa.service';
import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { TipoPessoa } from '../../model/tipoPessoa';

@Component({
  selector: 'cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.scss']
})
export class CadastroAlunoComponent implements OnInit, OnDestroy {

  private uuid: string;
  private sub: any;
  private personSelected = new Pessoa();
  
  constructor(private _route: ActivatedRoute, 
    private _router: Router, 
    private _pessoaService: PessoaService, 
    private _snackBar: MdSnackBar) { }

  ngOnInit() {
    this.personSelected = new Pessoa();
    this.personSelected.tipo = new TipoPessoa();
    
    this.sub = this._route.params
      .subscribe(params => {
        this.uuid = params['uuid']; 
        if (this.uuid) {
          this._pessoaService.carregarPessoaCompleta(this.uuid)
            .subscribe(result => {
              this.personSelected = result;
            });
        }
      });
  }

  gravar() {
    if (this.personSelected.uuid) {
      this._pessoaService.alterar(this.personSelected).subscribe(ob => {
          this._snackBar.open('Pessoa alterada com sucesso', 'OK', { duration: 3000 });
          this.voltar();
        },
        err => {
          this._snackBar.open('Erro ao alterar pessoa: ' + err.message, '', { duration: 3000 });
        });
    } else {
        this._pessoaService.incluir(this.personSelected).subscribe(ob => {
          this._snackBar.open('Pessoa incluída com sucesso', 'OK', { duration: 3000 });
          this.voltar();
        },
        err => {
          this._snackBar.open('Erro ao incluir pessoa: ' + err.message, '', { duration: 3000 });
        });
    }      
  }

  voltar() {
    this._router.navigate(['/main/dashboard']);
  }

  get diagnostic() { return JSON.stringify(this.personSelected); }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
