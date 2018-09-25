import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { TurmaService } from '../../services/turma.service';
import { Turma } from '../../model/turma';

@Component({
  selector: 'app-cadastro-turma',
  templateUrl: './cadastro-turma.component.html',
  styleUrls: ['./cadastro-turma.component.scss']
})
export class CadastroTurmaComponent implements OnInit, OnDestroy {
  
  private uuid: string;
  private sub: any;
  private turmaSelected = new Turma();
  
  constructor(private _route: ActivatedRoute, 
    private _router: Router, 
    private _turmaService: TurmaService, 
    private _snackBar: MdSnackBar) { }
  
  ngOnInit() {
    this.turmaSelected = new Turma();
    
    this.sub = this._route.params
      .subscribe(params => {
        this.uuid = params['uuid']; 
        if (this.uuid) {
          this._turmaService.carregarTurmaCompleta(this.uuid)
            .subscribe(result => {
              this.turmaSelected = result;
            });
        }
      });
  }

  gravar() {
    if (this.turmaSelected.uuid) {
      this._turmaService.alterar(this.turmaSelected).subscribe(ob => {
          this._snackBar.open('Turma alterada com sucesso', 'OK', { duration: 3000 });
          this.voltar();
        },
        err => {
          this._snackBar.open('Erro ao alterar turma: ' + err.message, '', { duration: 3000 });
        });
    } else {
        this._turmaService.incluir(this.turmaSelected).subscribe(ob => {
          this._snackBar.open('Turma incluída com sucesso', 'OK', { duration: 3000 });
          this.voltar();
        },
        err => {
          this._snackBar.open('Erro ao incluir turma: ' + err.message, '', { duration: 3000 });
        });
    }   
  }

  voltar() {
    this._router.navigate(['/main/dashboard']);
  }

  get diagnostic() { return JSON.stringify(this.turmaSelected); }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
