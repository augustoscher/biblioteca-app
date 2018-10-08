import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmprestimoService } from '../../services/emprestimo.service';
import { MdSnackBar } from '@angular/material';
import { Emprestimo } from '../../model/emprestimo';
import { TdDataTableSortingOrder, ITdDataTableColumn } from '@covalent/core';
import { Autor } from '../../model/autor';

const NOME_FMT: (v: any) => any = (v: Autor) => v ? v.nome : "";

@Component({
  selector: 'devolucao-livro',
  templateUrl: './devolucao-livro.component.html',
  styleUrls: ['./devolucao-livro.component.scss']
})
export class DevolucaoLivroComponent implements OnInit, OnDestroy {
  
  data: Array<any> = [];
  filteredData: Array<any> = [];

  filteredTotal: number;
  searchTerm = '';
  fromRow = 1;
  currentPage = 1;
  pageSize = 10;
  sortBy = '';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

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
              this.filteredData = this.emprestimoSelected.livros;
              this.data = this.emprestimoSelected.livros;
              this.filteredTotal = this.emprestimoSelected.livros.length;
            });
        }
      });
  }

  columns: ITdDataTableColumn[] = [
    {name: 'livro.titulo', label: 'Livro'},
    {name: 'livro.isbn', label: 'Isbn'},
    {name: 'livro.autor', label: 'Autor',  format: NOME_FMT},
    {name: 'livro.codigoLivre', label: 'Código Livre'},
  ];

  voltar() {
    this._router.navigate(['/main/dashboard']);
  }

  get diagnostic() { return JSON.stringify(this.emprestimoSelected); }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
