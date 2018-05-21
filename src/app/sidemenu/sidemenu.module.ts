import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideitemComponent} from './item/sideitem.component';
import {SidemenuComponent} from './menu/sidemenu.component';
import {MaterialModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [SidemenuComponent, SideitemComponent],
  exports: [SidemenuComponent, SideitemComponent]
})
export class SidemenuModule {
}
