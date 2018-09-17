import { Component, OnInit } from '@angular/core';
import { TdDataTableSortingOrder, TdDataTableService, ITdDataTableColumn, ITdDataTableSortChangeEvent, IPageChangeEvent } from '@covalent/core';
import { TurmaService } from '../../services/turma.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-turma',
  templateUrl: './consulta-turma.component.html',
  styleUrls: ['./consulta-turma.component.scss']
})
export class ConsultaTurmaComponent implements OnInit {

  data: Array<any>;
  filteredData: Array<any>;
  turmaSelected: any;

  filteredTotal: number;
  searchTerm = '';
  fromRow = 1;
  currentPage = 1;
  pageSize = 20;
  sortBy = 'nome';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _turmaService: TurmaService,
    private _dataTableService: TdDataTableService, 
    private _router: Router) { }

  ngOnInit() {
    this._turmaService.carregarTurmas()
      .subscribe(data => {
        this.filteredData = data;
        this.data = data;
        console.log(data)
        this.filteredTotal = data.length;
        // this.pageSize = data['size']
      });
  }

  edit() {
    if (this.turmaSelected) {
      this._router.navigate(['/main/cadastro-turma', this.turmaSelected.uuid]);
    }
  }

  columns: ITdDataTableColumn[] = [
    {name: 'nome', label: 'Turma', sortable: true},
    {name: 'userLastUpdate', label: 'Usuário'},
    {name: 'createdAt', label: 'Data Criação'}
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
