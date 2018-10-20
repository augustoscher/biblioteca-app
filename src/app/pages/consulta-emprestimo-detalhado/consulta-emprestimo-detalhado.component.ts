import { Component, OnInit } from '@angular/core';
import { TdDataTableSortingOrder, TdDataTableService, IPageChangeEvent, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { EmprestimoService } from '../../services/emprestimo.service';
import { Router } from '@angular/router';
import { EmprestimoLivroAluno } from '../../model/emprestimoLivroAluno';

@Component({
  selector: 'app-consulta-emprestimo-detalhado',
  templateUrl: './consulta-emprestimo-detalhado.component.html',
  styleUrls: ['./consulta-emprestimo-detalhado.component.scss']
})
export class ConsultaEmprestimoDetalhadoComponent implements OnInit {

  data: Array<any>;
  filteredData: Array<any>;
  itemSelected: any;

  filteredTotal: number;
  searchTerm = '';
  fromRow = 0;
  currentPage = 0;
  pageSize = 10;
  sortBy = 'createdAt';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(private _emprestimoService: EmprestimoService,
    private _dataTableService: TdDataTableService, 
    private _router: Router) { }

    ngOnInit() {
      this.carregarEmprestimosPendentes();
    }

    carregarEmprestimosPendentes() {
      this._emprestimoService.carregarEmprestimosPendentesDevolucao()
      .map(data => {
        let itens: Array<EmprestimoLivroAluno> = [];
        data.forEach(emprestimo => {
          emprestimo.livros.forEach(emprestimoItem => {
            if (emprestimoItem.status.id == 0) { //emprestado
              itens.push(new EmprestimoLivroAluno(emprestimo.uuid, emprestimo.turma.nome, emprestimo.pessoa.nome, emprestimoItem.livro.titulo, emprestimo.createdAt));
            }
          });
        });
        return itens;
      })
      .subscribe(data => {
        this.filteredData = data;
        this.data = data;
        this.filteredTotal = data.length;
      });
    }

    devolver() {
      if (this.itemSelected) {
        this._router.navigate(['/main/devolucao-livro', this.itemSelected.uuid]);
      }
    }

    voltar() {
      this._router.navigate(['/main/dashboard']);
    }
  
    columns: ITdDataTableColumn[] = [
      {name: 'pessoa', label: 'Pessoa'},
      {name: 'turma', label: 'Turma'},
      {name: 'livro', label: 'Livro'},
      {name: 'createdAt', label: 'Data Criação'}
    ];
  
    selectEvent(event: any) {
      if (event.selected) {
          this.itemSelected = event.row;
      } else {
          this.itemSelected = null;
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
