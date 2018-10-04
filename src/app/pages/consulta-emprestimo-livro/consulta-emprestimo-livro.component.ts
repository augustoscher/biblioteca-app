import { Component, OnInit } from '@angular/core';
import { TdDataTableSortingOrder, TdDataTableService, ITdDataTableColumn, ITdDataTableSortChangeEvent, IPageChangeEvent } from '@covalent/core';
import { EmprestimoService } from '../../services/emprestimo.service';
import { Router } from '@angular/router';
import { Pessoa } from '../../model/pessoa';
import { Turma } from '../../model/turma';

const PESSOA_FMT: (v: any) => any = (v: Pessoa) => v ? v.nome : "";
const TURMA_FMT: (v: any) => any = (v: Turma) => v ? v.nome : "";

@Component({
  selector: 'consulta-emprestimo-livro',
  templateUrl: './consulta-emprestimo-livro.component.html',
  styleUrls: ['./consulta-emprestimo-livro.component.scss']
})
export class ConsultaEmprestimoLivroComponent implements OnInit {

  data: Array<any>;
  filteredData: Array<any>;
  emprestimoSelected: any;

  filteredTotal: number;
  searchTerm = '';
  fromRow = 0;
  currentPage = 0;
  pageSize = 10;
  sortBy = 'createdAt';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(private _emprestimoService: EmprestimoService,
    private _dataTableService: TdDataTableService, 
    private _router: Router) { }

    ngOnInit() {
      this.carregarLivros();
    }
  
    carregarLivros() {
      this._emprestimoService.carregarEmprestimos(this.currentPage, this.pageSize)
        .subscribe(data => {
          this.filteredData = data['content'];
          this.data = data['content'];
          this.filteredTotal = data['totalElements'];
        });
    }
  
    carregarLivrosPorTitulo() {
      this._emprestimoService.carregarEmprestimosPor(this.searchTerm)
        .subscribe(data => {
          this.filteredData = data;
          this.data = data;
          this.filteredTotal = data.length;
          this.filter();
        });
    }
  
    edit() {
      if (this.emprestimoSelected) {
        this._router.navigate(['/main/cadastro-livro', this.emprestimoSelected.uuid]);
      }
    }
  
    columns: ITdDataTableColumn[] = [
      // {name: 'titulo', label: 'Livro'},
      // {name: 'isbn', label: 'Isbn'},
      // {name: 'autor.nome', label: 'Autor'},
      // {name: 'codigoLivre', label: 'Código Livre'},
      {name: 'userLastUpdate', label: 'Usuário'},
      {name: 'createdAt', label: 'Data Criação'}
    ];
  
    selectEvent(event: any) {
        if (event.selected) {
            this.emprestimoSelected = event.row;
        } else {
            this.emprestimoSelected = null;
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
      this.currentPage = pagingEvent.page -1;
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

}
