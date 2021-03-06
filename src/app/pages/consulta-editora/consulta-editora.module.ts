import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdButtonModule, MdButtonToggleModule } from '@angular/material';
import { CovalentCommonModule, CovalentDataTableModule, CovalentFileModule, CovalentMediaModule, CovalentNotificationsModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule } from '@covalent/core';
import { RouterModule } from '@angular/router';
import { ConsultaEditoraComponent } from './consulta-editora.component';
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
      {path: '', component: ConsultaEditoraComponent}
    ])
  ],
  declarations: [ConsultaEditoraComponent],
  providers: [ConsultaEditoraComponent]
})
export class ConsultaEditoraModule { }
