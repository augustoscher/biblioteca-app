import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdButtonModule, MdButtonToggleModule } from '@angular/material';
import { CovalentCommonModule, CovalentDataTableModule, CovalentFileModule, CovalentMediaModule, CovalentNotificationsModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule } from '@covalent/core';
import { RouterModule } from '@angular/router';
import { ConsultaEmprestimoDetalhadoComponent } from './consulta-emprestimo-detalhado.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdButtonToggleModule,
    CovalentCommonModule, CovalentDataTableModule, CovalentFileModule, CovalentMediaModule, 
    CovalentNotificationsModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
    RouterModule.forChild([
      {path: '', component: ConsultaEmprestimoDetalhadoComponent}
    ])
  ],
  declarations: [ConsultaEmprestimoDetalhadoComponent],
  providers: [ConsultaEmprestimoDetalhadoComponent]
})
export class ConsultaEmprestimoDetalhadoModule { }
