import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableColumn, ITdDataTableSortChangeEvent, IPageChangeEvent } from '@covalent/core';
import { routerAnimation } from '../utils/page.animation';
import { EditoraService } from '../services/editora.service';

@Component({
  selector: 'app-dialog-search-editora',
  templateUrl: './dialog-search-editora.component.html',
  styleUrls: ['./dialog-search-editora.component.scss'],
  animations: [routerAnimation]
})
export class DialogSearchEditoraComponent implements OnInit {

  data: Array<any>;
  filteredData: Array<any>;
  editoraSelected: any;

  showSpinner: boolean = true;

  filteredTotal: number;
  searchTerm = '';
  fromRow = 0;
  currentPage = 0;
  pageSize = 10;
  sortBy = 'nome';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(public dialogRef: MdDialogRef<DialogSearchEditoraComponent>,
     private _editoraService: EditoraService,
     private _dataTableService: TdDataTableService) {}

  ngOnInit() {
    this.carregarEditoras();
  }

  carregarEditoras() {
    this._editoraService.carregarEditoras(this.currentPage, this.pageSize)
      .subscribe(data => {
        this.filteredData = data['content'];
        this.data = data['content'];
        this.filteredTotal = data['totalElements'];
        this.pageSize = data['size']
        this.showSpinner=false;
      });
  }

  carregarEditorasPorNome(){
    this._editoraService.carregarEditorasPor(this.searchTerm)
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
    if (this.editoraSelected) {
      this.dialogRef.close(this.editoraSelected);
    }
  }

  columns: ITdDataTableColumn[] = [
    {name: 'nome', label: 'Editora', sortable: true},
    {name: 'userLastUpdate', label: 'Usuário'},
    {name: 'createdAt', label: 'Data Criação' },
    {name: 'updatedAt', label: 'Data Atualização' }
  ];

  selectEvent(event: any) {
      if (event.selected) {
          this.editoraSelected = event.row;
      } else {
          this.editoraSelected = null;
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
      this.carregarEditoras();
    } else {
      this.carregarEditorasPorNome();
    }
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page -1;
    this.pageSize = pagingEvent.pageSize;
    this.carregarEditoras();
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
