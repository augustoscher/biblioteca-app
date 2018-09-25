import { Component, OnInit } from '@angular/core';
import { TdDataTableSortingOrder, TdDataTableService, ITdDataTableColumn, ITdDataTableSortChangeEvent, IPageChangeEvent } from '@covalent/core';
import { EditoraService } from '../../services/editora.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-editora',
  templateUrl: './consulta-editora.component.html',
  styleUrls: ['./consulta-editora.component.scss']
})
export class ConsultaEditoraComponent implements OnInit {

  data: Array<any>;
  filteredData: Array<any>;
  editoraSelected: any;

  filteredTotal: number;
  searchTerm = '';
  fromRow = 1;
  currentPage = 1;
  pageSize = 20;
  sortBy = 'nome';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _editoraService: EditoraService,
    private _dataTableService: TdDataTableService, 
    private _router: Router) { }

  ngOnInit() {
    this._editoraService.carregarEditoras()
      .subscribe(data => {
        this.filteredData = data['content'];
        this.data = data['content'];
        this.filteredTotal = data['totalElements'];
        this.pageSize = data['size']
      });
  }

  edit() {
    if (this.editoraSelected) {
      this._router.navigate(['/main/cadastro-editora', this.editoraSelected.uuid]);
    }
  }

  columns: ITdDataTableColumn[] = [
    {name: 'nome', label: 'Editora', sortable: true},
    {name: 'userLastUpdate', label: 'Usuário'},
    {name: 'createdAt', label: 'Data Criação'}
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