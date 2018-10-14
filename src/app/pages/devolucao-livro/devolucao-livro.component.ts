import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmprestimoService } from '../../services/emprestimo.service';
import { MdSnackBar } from '@angular/material';
import { Emprestimo } from '../../model/emprestimo';
import { TdDataTableSortingOrder, ITdDataTableColumn } from '@covalent/core';
import { Autor } from '../../model/autor';
import { EmprestimoLivro } from '../../model/emprestimoLivro';
import { StatusEmprestimo } from '../../model/statusEmprestimo';

const NOME_FMT: (v: any) => any = (v: any) => v ? v.nome : "";

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
  public itensSelected: Array<EmprestimoLivro> = [];

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

  devolver() {

    if (this.isItemDevolvidoSelecionado()) {
      this._snackBar.open('Foram selecionados itens já devolvidos. Verifique itens selecionados.', 'OK', { duration: 3000 });
      return;
    }

    //setar status devolvido nos itens do emprestimo conforme os itens de bind view
    this.itensSelected.forEach(itemSelected => {
      this.emprestimoSelected.livros.forEach(item => {
        if (itemSelected.uuid === item.uuid) {
          item.status = this.getStatusDevolvido();
        }
      });
    });

    this._emprestimoService.alterar(this.emprestimoSelected).subscribe(ob => {
      this._snackBar.open('Devolução realizada com sucesso', 'OK', { duration: 3000 });
      this.voltar();
    },
    err => {
      this._snackBar.open('Erro ao realizar devolução: ' + err.message, '', { duration: 3000 });
    });
  }

  selectEvent(event: any) {
    if (event.selected) {
        this.itensSelected.push(event.row);
        console.log(this.itensSelected);
    } else {
      let idx = this.itensSelected.indexOf(event.row, 0);
      this.itensSelected.splice(idx,1);
    }     
  } 

  selectAllEvent(event: any) {
    if (event.selected) {
      this.itensSelected = [];
      event.rows.forEach(item => {
        this.itensSelected.push(item);
      });
    } else {
      this.itensSelected = [];
    }
  }

  isItemDevolvidoSelecionado(): boolean {
    console.log(this.itensSelected);
    if (this.itensSelected == undefined || this.itensSelected.length <= 0) {
      return false;
    } else {
      let temItemDevolvido = false;
      this.itensSelected.forEach(item => {
        if (item.status.id == 1) {
          temItemDevolvido = true;
        }
      });
      return temItemDevolvido;
    }

  }

  getStatusDevolvido(): StatusEmprestimo {
    let status = new StatusEmprestimo();
    status.id = 1;
    status.descricao = 'Devolvido';
    return status;
  }

  columns: ITdDataTableColumn[] = [
    {name: 'livro.titulo', label: 'Livro'},
    {name: 'livro.isbn', label: 'Isbn'},
    {name: 'livro.autor', label: 'Autor',  format: NOME_FMT},
    {name: 'livro.editora', label: 'Editora',  format: NOME_FMT},
    {name: 'livro.codigoLivre', label: 'Código Livre'},
    {name: 'status.descricao', label: 'Status'},
  ];

  voltar() {
    this._router.navigate(['/main/dashboard']);
  }

  get diagnostic() { return JSON.stringify(this.emprestimoSelected); }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
