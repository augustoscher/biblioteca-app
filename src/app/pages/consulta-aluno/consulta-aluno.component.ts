import { PessoaService } from './../../services/pessoa.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { TdDataTableSortingOrder, ITdDataTableColumn, ITdDataTableSortChangeEvent, IPageChangeEvent, TdDataTableService } from '@covalent/core';
import { Router } from '@angular/router';

@Component({
  selector: 'consulta-aluno',
  templateUrl: './consulta-aluno.component.html',
  styleUrls: ['./consulta-aluno.component.scss']
})
export class ConsultaAlunoComponent implements OnInit {

  data: Array<any>;
  filteredData: Array<any>;
  personSelected: any;

  showSpinner: boolean = true;
  isLoadingDone: boolean = false;

  filteredTotal: number;
  searchTerm = '';
  fromRow = 0;
  currentPage = 0;
  pageSize = 10;
  sortBy = 'nome';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _pessoaService: PessoaService,
    private _dataTableService: TdDataTableService, 
    private _router: Router) { }

  ngOnInit() {
    this.carregarPessoas();
  }

  carregarPessoas() {
    // this.showSpinner = true;
    this._pessoaService.carregarPessoas(this.currentPage, this.pageSize)
    .subscribe(data => {
      this.filteredData = data['content'];
      this.data = data['content'];
      this.filteredTotal = data['totalElements'];
      this.showSpinner = false;
      this.isLoadingDone = true;
    });
  }

  carregarPessoasPorNome() {
    // this.showSpinner = true;
    this._pessoaService.carregarPessoasPor(this.searchTerm)
      .subscribe(data => {
        this.filteredData = data;
        this.data = data;
        this.filteredTotal = data.length;
        this.filter();
        this.showSpinner = false;
      });
  }

  edit() {
    if (this.personSelected) {
        this._router.navigate(['/main/cadastro-pessoa', this.personSelected.uuid]);
    }
  }

  columns: ITdDataTableColumn[] = [
    {name: 'codigo', label: 'Código'},
    {name: 'nome', label: 'Nome'},
    {name: 'tipo.descricao', label: 'Tipo'},
    {name: 'userLastUpdate', label: 'Usuário'},
    {name: 'createdAt', label: 'Data Criação'}
  ];

  selectEvent(event: any) {
      if (event.selected) {
          this.personSelected = event.row;
      } else {
          this.personSelected = null;
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
      this.carregarPessoas();
    } else {
      this.carregarPessoasPorNome();
    }
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page -1;
    this.pageSize = pagingEvent.pageSize;
    this.carregarPessoas();
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
