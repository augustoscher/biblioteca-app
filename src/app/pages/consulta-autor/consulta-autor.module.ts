import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdButtonModule, MdButtonToggleModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CovalentCommonModule, CovalentDataTableModule, CovalentFileModule, CovalentMediaModule, CovalentNotificationsModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule } from '@covalent/core';
import { ConsultaAutorComponent } from './consulta-autor.component';
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
      {path: '', component: ConsultaAutorComponent}
    ])
  ],
  declarations: [ConsultaAutorComponent],
  providers: [ConsultaAutorComponent]
})
export class ConsultaAutorModule { }
