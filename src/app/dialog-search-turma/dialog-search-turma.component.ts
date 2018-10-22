import { Component, OnInit } from '@angular/core';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableColumn, ITdDataTableSortChangeEvent, IPageChangeEvent } from '@covalent/core';
import { MdDialogRef } from '@angular/material';
import { TurmaService } from '../services/turma.service';

@Component({
  selector: 'app-dialog-search-turma',
  templateUrl: './dialog-search-turma.component.html',
  styleUrls: ['./dialog-search-turma.component.scss']
})
export class DialogSearchTurmaComponent implements OnInit {

  data: Array<any>;
  filteredData: Array<any>;
  turmaSelected: any;
  
  showSpinner: boolean = true;

  filteredTotal: number;
  searchTerm = '';
  fromRow = 1;
  currentPage = 1;
  pageSize = 20;
  sortBy = 'nome';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(public dialogRef: MdDialogRef<DialogSearchTurmaComponent>,
     private _turmaService: TurmaService,
     private _dataTableService: TdDataTableService) {}

  ngOnInit() {
  this._turmaService.carregarTurmas()
    .subscribe(data => {
      this.filteredData = data;
        this.data = data;
        this.filteredTotal = data.length;
        this.showSpinner = false;
    });
  }

  cancelar(){
    this.dialogRef.close();
  }

  selecionar(){
    if (this.turmaSelected) {
      this.dialogRef.close(this.turmaSelected);
    }
  }

  columns: ITdDataTableColumn[] = [
    {name: 'nome', label: 'Turma', sortable: true},
    {name: 'userLastUpdate', label: 'Usuário'},
    {name: 'createdAt', label: 'Data Criação' },
    {name: 'updatedAt', label: 'Data Atualização' }
  ];

  selectEvent(event: any) {
      if (event.selected) {
          this.turmaSelected = event.row;
      } else {
          this.turmaSelected = null;
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
