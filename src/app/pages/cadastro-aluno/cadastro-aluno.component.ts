import { PessoaService } from './../../services/pessoa.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Pessoa } from '../../model/pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.scss']
})
export class CadastroAlunoComponent implements OnInit {

  private uuid: string;
  private sub: any;
  personSelected = new Pessoa();

  constructor(private _route: ActivatedRoute, 
    private _router: Router, 
    private _pessoaService: PessoaService, 
    private _snackBar: MdSnackBar) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      let uuid = params['uuid']; 
      console.log(uuid);
      // this._versaoService.carregarVersaoCompleta(this.id).subscribe(result => {
      //     this.versaoSelecionada = result;

      //     this.versaoSelecionada.autorizacoes.forEach(element => {
      //         if (element.vinculado === 'Sim') {
      //             this.autorizacoesSelecionadas.push(element);
      //         }
      //     });

          // this.filteredData = this.versaoSelecionada.autorizacoes;
          // this.filteredTotal = this.versaoSelecionada.autorizacoes.length;
          // this.filter();
    });
  }



}
