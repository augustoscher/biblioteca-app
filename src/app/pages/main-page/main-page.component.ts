import {Component, HostBinding, OnInit} from '@angular/core';
import {ResizeService} from '../../resize/resize.service';
import {routerAnimation} from '../../utils/page.animation';
import { Usuario } from '../../model/usuario';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [routerAnimation]
})
export class MainPageComponent implements OnInit {
  @HostBinding('@routerAnimation') routerAnimation = true;
  @HostBinding('class.dark-theme') darkTheme = false;
  _sidenavMode = 'side';
  _boxedLayout = false;

  tipo: string;
  nome: string;

  constructor(public resizeService: ResizeService,
     private _userService: UserService, private _router: Router) { }

  ngOnInit(){
  }

  getUserRule() {
    if (this.tipo == undefined) {
      this.tipo = this._userService.getRule();
    }
    return this.tipo;
  }

  getUserName() {
    if (this.nome == undefined) {
      this.nome = this._userService.getUser();
    }
    return this.nome;
  }

  logout(){
    this._userService.logout();
    this.nome = undefined;
    this.tipo = undefined;
    this._router.navigate(['login']);
  }

  set sidenavMode(val) {
    this._sidenavMode = val;
    setTimeout(() => this.resizeService.resizeInformer$.next(), 500);
  }
  get sidenavMode() {
    return this._sidenavMode;
  }

  set boxedLayout(val) {
    this._boxedLayout = val;
    setTimeout(() => this.resizeService.resizeInformer$.next(), 500);
  }

  get boxedLayout() {
    return this._boxedLayout;
  }

}
