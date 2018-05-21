import {Component, HostBinding, OnInit} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-snackbar-page',
  templateUrl: './snackbar-page.component.html',
  styleUrls: ['./snackbar-page.component.scss'],
  animations: [routerAnimation]
})
export class SnackbarPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  constructor(public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
