import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableColumn, ITdDataTableSortChangeEvent, IPageChangeEvent } from '@covalent/core';
import { LivroService } from '../../services/livro.service';
import { Autor } from '../../model/autor';

@Component({
  selector: 'consulta-livro',
  templateUrl: './consulta-livro.component.html',
  styleUrls: ['./consulta-livro.component.scss']
})
export class ConsultaLivroComponent implements OnInit {

  data: Array<any>;
  filteredData: Array<any>;
  livroSelected: any;

  showSpinner: boolean = true;
  isLoadingDone: boolean = false;

  filteredTotal: number;
  searchTerm = '';
  fromRow = 0;
  currentPage = 0;
  pageSize = 10;
  sortBy = 'titulo';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _livroService: LivroService,
    private _dataTableService: TdDataTableService, 
    private _router: Router) { }

  ngOnInit() {
    this.carregarLivros();
  }

  carregarLivros() {
    this._livroService.carregarLivros(this.currentPage, this.pageSize)
      .subscribe(data => {
        this.filteredData = data['content'];
        this.data = data['content'];
        this.filteredTotal = data['totalElements'];
        this.showSpinner = false;
        this.isLoadingDone = true;
      });
  }

  carregarLivrosPor() {
    this._livroService.carregarLivrosPor(this.searchTerm)
      .subscribe(data => {
        this.filteredData = data['content'];
        this.data = data['content'];
        this.filteredTotal = data['totalElements'];
        // this.filter();
      });
  }

  edit() {
    if (this.livroSelected) {
      this._router.navigate(['/main/cadastro-livro', this.livroSelected.uuid]);
    }
  }

  columns: ITdDataTableColumn[] = [
    {name: 'titulo', label: 'Livro'},
    {name: 'isbn', label: 'Isbn'},
    {name: 'autor.nome', label: 'Autor'},
    {name: 'editora.nome', label: 'Editora'},
    {name: 'codigoLivre', label: 'Código Livre'},
    {name: 'emprestado', label: 'Emprestado'}
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
    this.fromRow = 0;
    this.currentPage = 0;
    if (!searchTerm) {
      this.carregarLivros();
    } else {
      this.carregarLivrosPor();
    }
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page -1;
    this.pageSize = pagingEvent.pageSize;
    this.carregarLivros();
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
