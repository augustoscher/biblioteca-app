import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdButtonModule, MdButtonToggleModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CovalentCommonModule, CovalentDataTableModule, CovalentFileModule, CovalentMediaModule, CovalentNotificationsModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule } from '@covalent/core';
import { ConsultaAlunoComponent } from './consulta-aluno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdButtonToggleModule,
    CovalentCommonModule, CovalentDataTableModule, CovalentFileModule, CovalentMediaModule, CovalentNotificationsModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
    RouterModule.forChild([
      {path: '', component: ConsultaAlunoComponent}
    ])
  ],
  declarations: [ConsultaAlunoComponent],
  providers: [ConsultaAlunoComponent]
})
export class ConsultaAlunoModule { }
