import { CadastroAlunoComponent } from './cadastro-aluno.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    RouterModule.forChild([
      {path: '', component: CadastroAlunoComponent}
    ])
  ],
  declarations: [CadastroAlunoComponent],
  providers: [CadastroAlunoComponent]
})
export class CadastroAlunoModule { }
