import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableColumn, ITdDataTableSortChangeEvent, IPageChangeEvent } from '@covalent/core';
import { routerAnimation } from '../utils/page.animation';
import { AutorService } from '../services/autor.service';

@Component({
  selector: 'app-dialog-search-autor',
  templateUrl: './dialog-search-autor.component.html',
  styleUrls: ['./dialog-search-autor.component.scss'],
  animations: [routerAnimation]
})
export class DialogSearchAutorComponent implements OnInit {

  data: Array<any>;
  filteredData: Array<any>;
  autorSelected: any;

  filteredTotal: number;
  searchTerm = '';
  fromRow = 0;
  currentPage = 0;
  pageSize = 10;
  sortBy = 'nome';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(public dialogRef: MdDialogRef<DialogSearchAutorComponent>,
     private _autorService: AutorService,
     private _dataTableService: TdDataTableService) {}

  ngOnInit() {
    this.carregarAutor();
  }

  carregarAutor() {
    this._autorService.carregarAutores(this.currentPage, this.pageSize)
      .subscribe(data => {
        this.filteredData = data['content'];
        this.data = data['content'];
        this.filteredTotal = data['totalElements'];
      });
  }

  carregarAutorPorNome() {
    this._autorService.carregarAutorPor(this.searchTerm)
    .subscribe(data => {
      this.filteredData = data;
      this.data = data;
      this.filteredTotal = data.length;
      this.filter();
    });
  }

  cancelar(){
    this.dialogRef.close();
  }

  selecionar(){
    if (this.autorSelected) {
      this.dialogRef.close(this.autorSelected);
    }
  }

  columns: ITdDataTableColumn[] = [
    {name: 'nome', label: 'Autor'},
    {name: 'userLastUpdate', label: 'Usuário'},
    {name: 'createdAt', label: 'Data Criação' },
    {name: 'updatedAt', label: 'Data Atualização' }
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
    this.fromRow = 0;
    this.currentPage = 0;
    if (!searchTerm) {
      this.carregarAutor();
    } else {
      this.carregarAutorPorNome();
    }
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page -1;
    this.pageSize = pagingEvent.pageSize;
    this.carregarAutor();
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
