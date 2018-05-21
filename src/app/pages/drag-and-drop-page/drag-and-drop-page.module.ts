import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DragAndDropPageComponent} from './drag-and-drop-page.component';
import {DragulaModule} from 'ng2-dragula';
import {MdCardModule, MdIconModule, MdListModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule,
    MdCardModule,
    MdListModule,
    MdIconModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {path: '', component: DragAndDropPageComponent}
    ])
  ],
  declarations: [
    DragAndDropPageComponent
  ]
})
export class DragAndDropPageModule {
}
