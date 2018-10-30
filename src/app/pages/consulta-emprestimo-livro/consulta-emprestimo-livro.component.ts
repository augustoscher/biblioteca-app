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

  showSpinner: boolean = true;
  isLoadingDone: boolean = false;

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
      this.carregarEmprestimos();
    }
  
    carregarEmprestimos() {
      this._emprestimoService.carregarEmprestimos(this.currentPage, this.pageSize)
        .subscribe(data => {
          this.filteredData = data['content'];
          this.data = data['content'];
          this.filteredTotal = data['totalElements'];
          this.showSpinner = false;
          this.isLoadingDone = true;
        });
    }
  
    carregarEmprestimosPor() {
      this._emprestimoService.carregarEmprestimosPor(this.searchTerm)
        .subscribe(data => {
          this.filteredData = data['content'];
          this.data = data['content'];
          this.filteredTotal = data['totalElements'];
          // this.filter();
        });
    }
  
    devolver() {
      if (this.emprestimoSelected) {
        this._router.navigate(['/main/devolucao-livro', this.emprestimoSelected.uuid]);
      }
    }

    voltar() {
      this._router.navigate(['/main/dashboard']);
    }
  
    columns: ITdDataTableColumn[] = [
      {name: 'pessoa.nome', label: 'Pessoa'},
      {name: 'turma.nome', label: 'Turma'},
      {name: 'userLastUpdate', label: 'Usuário'},
      {name: 'createdAt', label: 'Data Criação'},
      {name: 'status.descricao', label: 'Status'},
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
        this.carregarEmprestimos();
      } else {
        this.carregarEmprestimosPor();
      }
    }
  
    page(pagingEvent: IPageChangeEvent): void {
      this.fromRow = pagingEvent.fromRow;
      this.currentPage = pagingEvent.page -1;
      this.pageSize = pagingEvent.pageSize;
      this.carregarEmprestimos();
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
