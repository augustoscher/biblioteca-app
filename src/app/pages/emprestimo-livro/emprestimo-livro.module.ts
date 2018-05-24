import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmprestimoLivroComponent } from './emprestimo-livro.component';
import { MdCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    RouterModule.forChild([
      {path: '', component: EmprestimoLivroComponent}
    ])
  ],
  declarations: [EmprestimoLivroComponent],
  providers: [EmprestimoLivroComponent]
})
export class EmprestimoLivroModule { }
