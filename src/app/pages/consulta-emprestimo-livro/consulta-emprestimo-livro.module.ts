import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaEmprestimoLivroComponent } from './consulta-emprestimo-livro.component';
import { MdCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    RouterModule.forChild([
      {path: '', component: ConsultaEmprestimoLivroComponent}
    ])
  ],
  declarations: [ConsultaEmprestimoLivroComponent],
  providers: [ConsultaEmprestimoLivroComponent]
})
export class ConsultaEmprestimoLivroModule { }
