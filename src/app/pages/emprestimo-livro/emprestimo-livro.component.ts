import { LivroService } from './../../services/livro.service';
import { Component, OnInit } from '@angular/core';
import { Emprestimo } from '../../model/emprestimo';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar, MdDialog } from '@angular/material';
import { EmprestimoService } from '../../services/emprestimo.service';
import { DialogSearchPessoaComponent } from '../../dialog-search-pessoa/dialog-search-pessoa.component';
import { DialogSearchTurmaComponent } from '../../dialog-search-turma/dialog-search-turma.component';
import { TdDataTableSortingOrder, IPageChangeEvent, ITdDataTableSortChangeEvent, TdDataTableService, ITdDataTableColumn } from '@covalent/core';

@Component({
  selector: 'emprestimo-livro',
  templateUrl: './emprestimo-livro.component.html',
  styleUrls: ['./emprestimo-livro.component.scss']
})
export class EmprestimoLivroComponent implements OnInit {

  // private uuid: string;
  // private sub: any;
  data: Array<any> = [];
  filteredData: Array<any> = [];
  livroSelected: any;
  livrosEmprestados: Array<any> = [];

  filteredTotal: number;
  searchTerm = '';
  fromRow = 1;
  currentPage = 1;
  pageSize = 20;
  sortBy = 'titulo';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  public emprestimoSelected = new Emprestimo();
  
  constructor(private _route: ActivatedRoute, 
    private _router: Router, 
    private _emprestimoService: EmprestimoService, 
    private _livroService: LivroService, 
    private _dataTableService: TdDataTableService, 
    private _snackBar: MdSnackBar, private dialog: MdDialog) { }

  ngOnInit() {
    this.emprestimoSelected = new Emprestimo();
    
    this._livroService.carregarLivros()
      .subscribe(data => {
        this.filteredData = data['content'];
        this.data = data['content'];
        this.filteredTotal = data['totalElements'];
        this.pageSize = data['size']
      });

    // this.sub = this._route.params
    //   .subscribe(params => {
    //     this.uuid = params['uuid']; 
    //     if (this.uuid) {
    //       this._emprestimoService.carregarEmprestimosCompleto(this.uuid)
    //         .subscribe(result => {
    //           this._emprestimoService = result;
    //         });
    //     }
    //   });
  }
  selecionarLivro() {
    this.livrosEmprestados.push(this.livroSelected);
  }

  gravar() {
    if (this.emprestimoSelected.uuid) {
      this._emprestimoService.alterar(this.emprestimoSelected).subscribe(ob => {
          this._snackBar.open('Empréstimo alterado com sucesso', 'OK', { duration: 3000 });
          this.voltar();
        },
        err => {
          this._snackBar.open('Erro ao alterar empréstimo: ' + err.message, '', { duration: 3000 });
        });
    } else {
        this._emprestimoService.incluir(this.emprestimoSelected).subscribe(ob => {
          this._snackBar.open('Empréstimo incluído com sucesso', 'OK', { duration: 3000 });
          this.voltar();
        },
        err => {
          this._snackBar.open('Erro ao incluir empréstimo: ' + err.message, '', { duration: 3000 });
        });
    }   
  }

  searchTurma() {
    const dialogRef = this.dialog.open(DialogSearchTurmaComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.emprestimoSelected.turma = result;
      }
    });
  }

  searchPessoa() {
    const dialogRef = this.dialog.open(DialogSearchPessoaComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.emprestimoSelected.pessoa = result;
      }
    });
  }

  columns: ITdDataTableColumn[] = [
    {name: 'titulo', label: 'Livro', sortable: true},
    {name: 'isbn', label: 'Isbn', sortable: true},
    {name: 'autor.nome', label: 'Autor'},
    {name: 'codigoLivre', label: 'Código Livre', sortable: true},
    {name: 'userLastUpdate', label: 'Usuário'},
    {name: 'createdAt', label: 'Data Criação'}
  ];

  selectEvent(event: any) {
      if (event.selected) {
          this.livroSelected = event.row;
      } else {
          this.livroSelected = null;
      }     
  } 

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.fromRow = 1;
    this.currentPage = 1;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    //fazer a chamada paginada ao backend.
    //no subscribe atualizar a variavel this.data e chamar this.filter()
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.data;
    newData = this._dataTableService.filterData(newData, this.searchTerm, true);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }


  voltar() {
    this._router.navigate(['/main/dashboard']);
  }

  get diagnostic() { return JSON.stringify(this.emprestimoSelected); }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
