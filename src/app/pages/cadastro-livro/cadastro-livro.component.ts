import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../../services/livro.service';
import { MdSnackBar, MdDialog } from '@angular/material';
import { Livro } from '../../model/livro';
import { DialogSearchAutorComponent } from '../../dialog-search-autor/dialog-search-autor.component';
import { DialogSearchEditoraComponent } from '../../dialog-search-editora/dialog-search-editora.component';

@Component({
  selector: 'cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.scss']
})
export class CadastroLivroComponent implements OnInit {
  
  private uuid: string;
  private sub: any;
  public livroSelected = new Livro();
  
  constructor(private _route: ActivatedRoute, 
    private _router: Router, 
    private _livroService: LivroService, 
    private _snackBar: MdSnackBar, private dialog: MdDialog) { }
  
  ngOnInit() {
    this.livroSelected = new Livro();

    this.sub = this._route.params
      .subscribe(params => {
        this.uuid = params['uuid']; 
        if (this.uuid) {
          this._livroService.carregarLivrosCompleto(this.uuid)
            .subscribe(result => {
              this.livroSelected = result;
            });
        }
      });
  }
  
  gravar() {
    if (this.livroSelected.uuid) {
      this._livroService.alterar(this.livroSelected).subscribe(ob => {
          this._snackBar.open('Livro alterado com sucesso', 'OK', { duration: 3000 });
          this.voltar();
        },
        err => {
          this._snackBar.open('Erro ao alterar livro: ' + err.message, '', { duration: 3000 });
        });
    } else {
        this._livroService.incluir(this.livroSelected).subscribe(ob => {
          this._snackBar.open('Livro incluído com sucesso', 'OK', { duration: 3000 });
          this.voltar();
        },
        err => {
          this._snackBar.open('Erro ao incluir livro: ' + err.message, '', { duration: 3000 });
        });
    }   
  }

  searchAutor() {
    const dialogRef = this.dialog.open(DialogSearchAutorComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.livroSelected.autor = result;
      }
    });
  }

  searchEditora() {
    const dialogRef = this.dialog.open(DialogSearchEditoraComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.livroSelected.editora = result;
      }
    });
  }

  voltar() {
    this._router.navigate(['/main/dashboard']);
  }

  get diagnostic() { return JSON.stringify(this.livroSelected); }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
