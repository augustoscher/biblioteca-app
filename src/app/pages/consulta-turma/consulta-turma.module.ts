import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonToggleModule, MdCardModule, MdButtonModule } from '@angular/material';
import { CovalentCommonModule, CovalentDataTableModule, CovalentFileModule, CovalentMediaModule, CovalentNotificationsModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule } from '@covalent/core';
import { RouterModule } from '@angular/router';
import { ConsultaTurmaComponent } from './consulta-turma.component';
import { LoadingSpinnerModule } from '../../loading-spinner/loading-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdButtonToggleModule,
    CovalentCommonModule, CovalentDataTableModule, CovalentFileModule, 
    CovalentMediaModule, CovalentNotificationsModule, CovalentPagingModule,
    CovalentSearchModule, CovalentStepsModule, LoadingSpinnerModule,
    RouterModule.forChild([
      {path: '', component: ConsultaTurmaComponent}
    ])
  ],
  declarations: [ConsultaTurmaComponent],
  providers: [ConsultaTurmaComponent]
})
export class ConsultaTurmaModule { }
