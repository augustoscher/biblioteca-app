import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableColumn, ITdDataTableSortChangeEvent, IPageChangeEvent } from '@covalent/core';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'consulta-livro',
  templateUrl: './consulta-livro.component.html',
  styleUrls: ['./consulta-livro.component.scss']
})
export class ConsultaLivroComponent implements OnInit {


  data: Array<any>;
  filteredData: Array<any>;
  livroSelected: any;

  filteredTotal: number;
  searchTerm = '';
  fromRow = 1;
  currentPage = 1;
  pageSize = 20;
  sortBy = 'titulo';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _livroService: LivroService,
    private _dataTableService: TdDataTableService, 
    private _router: Router) { }

  ngOnInit() {
    this._livroService.carregarLivros()
      .subscribe(data => {
        this.filteredData = data['content'];
        this.data = data['content'];
        this.filteredTotal = data['totalElements'];
        this.pageSize = data['size']
      });
  }

  edit() {
    if (this.livroSelected) {
      this._router.navigate(['/main/cadastro-livro', this.livroSelected.uuid]);
    }
  }

  columns: ITdDataTableColumn[] = [
    {name: 'titulo', label: 'Livro', sortable: true},
    {name: 'isbn', label: 'Isbn', sortable: true},
    {name: 'autor.nome', label: 'Autor', sortable: false},
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
