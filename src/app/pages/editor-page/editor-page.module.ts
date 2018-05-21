import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditorPageComponent} from './editor-page.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import {MdCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QuillModule,
    MdCardModule,
    RouterModule.forChild([
      {path: '', component: EditorPageComponent}
    ])
  ],
  declarations: [
    EditorPageComponent
  ]
})
export class EditorPageModule {
}
