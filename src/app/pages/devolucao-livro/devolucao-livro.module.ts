import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevolucaoLivroComponent } from './devolucao-livro.component';
import { RouterModule } from '@angular/router';
import { MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    RouterModule.forChild([
      {path: '', component: DevolucaoLivroComponent}
    ])
  ],
  declarations: [DevolucaoLivroComponent],
  providers: [DevolucaoLivroComponent]
})
export class DevolucaoLivroModule { }
