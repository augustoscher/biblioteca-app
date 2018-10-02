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
  fromRow = 0;
  currentPage = 0;
  pageSize = 10;
  sortBy = 'nome';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _editoraService: EditoraService,
    private _dataTableService: TdDataTableService, 
    private _router: Router) { }

  ngOnInit() {
    this.carregarEditoras();
  }

  carregarEditoras() {
    this._editoraService.carregarEditoras(this.currentPage, this.pageSize)
      .subscribe(data => {
        this.filteredData = data['content'];
        this.data = data['content'];
        this.filteredTotal = data['totalElements'];
      });
  }

  carregarEditorasPorNome() {
    this._editoraService.carregarEditorasPor(this.searchTerm)
    .subscribe(data => {
      this.filteredData = data;
      this.data = data;
      this.filteredTotal = data.length;
      this.filter();
    });
  }

  edit() {
    if (this.editoraSelected) {
      this._router.navigate(['/main/cadastro-editora', this.editoraSelected.uuid]);
    }
  }

  columns: ITdDataTableColumn[] = [
    {name: 'nome', label: 'Editora'},
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
