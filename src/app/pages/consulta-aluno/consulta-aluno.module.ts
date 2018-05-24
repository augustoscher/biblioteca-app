import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ConsultaAlunoComponent } from './consulta-aluno.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    RouterModule.forChild([
      {path: '', component: ConsultaAlunoComponent}
    ])
  ],
  declarations: [ConsultaAlunoComponent],
  providers: [ConsultaAlunoComponent]
})
export class ConsultaAlunoModule { }
