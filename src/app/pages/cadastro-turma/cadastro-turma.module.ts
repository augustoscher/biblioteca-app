import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdCardModule, MdButtonModule, MdInputModule, MdButtonToggleModule, MdSelectModule } from '@angular/material';
import { CovalentCommonModule, CovalentDataTableModule } from '@covalent/core';
import { RouterModule } from '@angular/router';
import { CadastroTurmaComponent } from './cadastro-turma.component';

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
      {path: '', component: CadastroTurmaComponent}
    ])
  ],
  declarations: [CadastroTurmaComponent],
  providers: [CadastroTurmaComponent]
})
export class CadastroTurmaModule { }
