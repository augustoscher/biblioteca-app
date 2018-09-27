import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../services/autor.service';
import { TdDataTableSortingOrder, TdDataTableService, ITdDataTableColumn, ITdDataTableSortChangeEvent, IPageChangeEvent } from '@covalent/core';
import { Router } from '@angular/router';

// const DATE_FORMAT: (v: any) => any = (v: Date) => v.getDay + '/' + v.getMonth() + '/' + v.getFullYear()

@Component({
  selector: 'app-consulta-autor',
  templateUrl: './consulta-autor.component.html',
  styleUrls: ['./consulta-autor.component.scss']
})
export class ConsultaAutorComponent implements OnInit {

  data: Array<any>;
  filteredData: Array<any>;
  autorSelected: any;

  filteredTotal: number;
  searchTerm = '';
  fromRow = 1;
  currentPage = 1;
  pageSize = 20;
  sortBy = 'nome';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _autorService: AutorService,
    private _dataTableService: TdDataTableService, 
    private _router: Router) { }

  ngOnInit() {
    this._autorService.carregarAutores()
      .subscribe(data => {
        this.filteredData = data['content'];
        this.data = data['content'];
        this.filteredTotal = data['totalElements'];
        this.pageSize = data['size']
      });
  }

  edit() {
    if (this.autorSelected) {
        this._router.navigate(['/main/cadastro-autor', this.autorSelected.uuid]);
    }
  }

  columns: ITdDataTableColumn[] = [
    {name: 'nome', label: 'Autor', sortable: true},
    {name: 'userLastUpdate', label: 'Usuário'},
    {name: 'createdAt', label: 'Data Criação' }
  ];

  selectEvent(event: any) {
      if (event.selected) {
          this.autorSelected = event.row;
      } else {
          this.autorSelected = null;
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
