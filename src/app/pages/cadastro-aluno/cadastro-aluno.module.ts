import { CadastroAlunoComponent } from './cadastro-aluno.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdCardModule, MdButtonModule, MdButtonToggleModule, MdInputModule, MdSelectModule } from '@angular/material';
import { CovalentCommonModule, CovalentDataTableModule, CovalentFileModule, CovalentMediaModule, CovalentNotificationsModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule } from '@covalent/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    ReactiveFormsModule,
    MdInputModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdSelectModule,
    CovalentCommonModule, CovalentDataTableModule, 
    RouterModule.forChild([
      {path: '', component: CadastroAlunoComponent}
    ])
  ],
  declarations: [CadastroAlunoComponent],
  providers: [CadastroAlunoComponent]
})
export class CadastroAlunoModule { }
