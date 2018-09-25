import { Component, OnInit } from '@angular/core';
import { Editora } from '../../model/editora';
import { ActivatedRoute, Router } from '@angular/router';
import { EditoraService } from '../../services/editora.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-cadastro-editora',
  templateUrl: './cadastro-editora.component.html',
  styleUrls: ['./cadastro-editora.component.scss']
})
export class CadastroEditoraComponent implements OnInit {

  private uuid: string;
  private sub: any;
  private editoraSelected = new Editora();
  
  constructor(private _route: ActivatedRoute, 
    private _router: Router, 
    private _editoraService: EditoraService, 
    private _snackBar: MdSnackBar) { }
  
  ngOnInit() {
    this.editoraSelected = new Editora();
    
    this.sub = this._route.params
      .subscribe(params => {
        this.uuid = params['uuid']; 
        if (this.uuid) {
          this._editoraService.carregarEditoraCompleta(this.uuid)
            .subscribe(result => {
              this.editoraSelected = result;
            });
        }
      });
  }

  gravar() {
    if (this.editoraSelected.uuid) {
      this._editoraService.alterar(this.editoraSelected).subscribe(ob => {
          this._snackBar.open('Editora alterada com sucesso', 'OK', { duration: 3000 });
          this.voltar();
        },
        err => {
          this._snackBar.open('Erro ao alterar editora: ' + err.message, '', { duration: 3000 });
        });
    } else {
        this._editoraService.incluir(this.editoraSelected).subscribe(ob => {
          this._snackBar.open('Editora incluída com sucesso', 'OK', { duration: 3000 });
          this.voltar();
        },
        err => {
          this._snackBar.open('Erro ao incluir editora: ' + err.message, '', { duration: 3000 });
        });
    }   
  }

  voltar() {
    this._router.navigate(['/main/dashboard']);
  }

  get diagnostic() { return JSON.stringify(this.editoraSelected); }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
