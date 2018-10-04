import { LivroService } from './../../services/livro.service';
import { Component, OnInit } from '@angular/core';
import { Emprestimo } from '../../model/emprestimo';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar, MdDialog } from '@angular/material';
import { EmprestimoService } from '../../services/emprestimo.service';
import { DialogSearchPessoaComponent } from '../../dialog-search-pessoa/dialog-search-pessoa.component';
import { DialogSearchTurmaComponent } from '../../dialog-search-turma/dialog-search-turma.component';
import { TdDataTableSortingOrder, IPageChangeEvent, ITdDataTableSortChangeEvent, TdDataTableService, ITdDataTableColumn } from '@covalent/core';
import { EmprestimoLivro } from '../../model/emprestimoLivro';
import { Autor } from '../../model/autor';

const NOME_FMT: (v: any) => any = (v: Autor) => v ? v.nome : "";

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
  fromRow = 0;
  currentPage = 0;
  pageSize = 10;
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
    this.carregarLivros();
    
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

  carregarLivros() {
    this._livroService.carregarLivros(this.currentPage, this.pageSize)
      .subscribe(data => {
        this.filteredData = data['content'];
        this.data = data['content'];
        this.filteredTotal = data['totalElements'];
      });
  }

  carregarLivrosPorTitulo() {
    this._livroService.carregarLivrosPor(this.searchTerm)
      .subscribe(data => {
        this.filteredData = data['content'];
        this.data = data['content'];
        this.filteredTotal = data['totalElements'];
        this.filter();
      });
  }

  selecionarLivro() {
    this.livrosEmprestados.push(this.livroSelected);
  }
  remover(livro: any){
    let idx = this.livrosEmprestados.indexOf(livro, 0);
    this.livrosEmprestados.splice(idx,1);
  }

  gravar() {
    if (this.livrosEmprestados && this.livrosEmprestados.length > 0) {
      this.livrosEmprestados.forEach(item => {
        let emprestimoLivro = new EmprestimoLivro();
        emprestimoLivro.livro.uuid = item.uuid;
        this.emprestimoSelected.livros.push(emprestimoLivro);
      });
    }
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
    {name: 'titulo', label: 'Livro'},
    {name: 'isbn', label: 'Isbn'},
    {name: 'autor.nome', label: 'Autor'},
    {name: 'codigoLivre', label: 'Código Livre'},
    {name: 'qtdExemplares', label: 'Exemplares'},
    {name: 'createdAt', label: 'Data Criação'}
  ];

  emprestimoLivroColumns: ITdDataTableColumn[] = [
    {name: 'titulo', label: 'Livro'},
    {name: 'isbn', label: 'Isbn'},
    {name: 'autor', label: 'Autor',  format: NOME_FMT},
    {name: 'codigoLivre', label: 'Código Livre'},
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
    this.fromRow = 0;
    this.currentPage = 0;
    if (!searchTerm) {
      this.carregarLivros();
    } else {
      this.carregarLivrosPorTitulo();
    }
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.carregarLivros();
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
