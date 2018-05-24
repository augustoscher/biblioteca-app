import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ConsultaLivroComponent } from './consulta-livro.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    RouterModule.forChild([
      {path: '', component: ConsultaLivroComponent}
    ])
  ],
  declarations: [ConsultaLivroComponent],
  providers: [ConsultaLivroComponent]
})
export class ConsultaLivroModule { }
