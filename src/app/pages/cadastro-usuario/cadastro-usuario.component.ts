import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(
    private _router: Router,
    private _snackBar: MdSnackBar,
    private _usuarioService: UserService) { }


  ngOnInit() {
  }

  cadastrar(formUser: any) {
    if (formUser.valid) {
      let usuario = new Usuario();
      usuario.nome = formUser.value.userName;
      usuario.login = formUser.value.login;
      usuario.senha = formUser.value.password;
      
      this._usuarioService.incluir(usuario).subscribe(ob => {
        this._snackBar.open('Usuário incluído com sucesso', 'OK', { duration: 3000 });
        this.voltar();
      },
      err => {
        this._snackBar.open('Não foi possível cadastrar usuário. Possívelmente este usuário já existe. Tente outro.', '', { duration: 3000 });
      });
    }
  }

  voltar() {
    this._router.navigate(['/main/dashboard']);
  }

}
