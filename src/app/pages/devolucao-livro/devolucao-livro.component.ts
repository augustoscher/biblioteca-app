import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmprestimoService } from '../../services/emprestimo.service';
import { MdSnackBar } from '@angular/material';
import { Emprestimo } from '../../model/emprestimo';

@Component({
  selector: 'devolucao-livro',
  templateUrl: './devolucao-livro.component.html',
  styleUrls: ['./devolucao-livro.component.scss']
})
export class DevolucaoLivroComponent implements OnInit, OnDestroy {
  
  private uuid: string;
  private sub: any;
  public emprestimoSelected = new Emprestimo();

  constructor(private _route: ActivatedRoute, 
    private _router: Router, 
    private _emprestimoService: EmprestimoService, 
    private _snackBar: MdSnackBar) { }

  ngOnInit() {
    this.emprestimoSelected = new Emprestimo();

    this.sub = this._route.params
      .subscribe(params => {
        this.uuid = params['uuid']; 
        if (this.uuid) {
          this._emprestimoService.carregarEmprestimosCompleto(this.uuid)
            .subscribe(result => {
              this.emprestimoSelected = result;
            });
        }
      });
  }

  
  voltar() {
    this._router.navigate(['/main/dashboard']);
  }

  get diagnostic() { return JSON.stringify(this.emprestimoSelected); }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
