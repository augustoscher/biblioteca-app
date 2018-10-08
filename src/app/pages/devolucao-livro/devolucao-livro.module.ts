import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonToggleModule, MdCardModule, MdButtonModule, MdInputModule } from '@angular/material';
import { CovalentCommonModule, CovalentDataTableModule, CovalentFileModule, CovalentMediaModule, CovalentNotificationsModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule } from '@covalent/core';
import { RouterModule } from '@angular/router';
import { DevolucaoLivroComponent } from './devolucao-livro.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdButtonToggleModule,
    CovalentCommonModule, CovalentDataTableModule, CovalentFileModule, CovalentMediaModule, 
    CovalentNotificationsModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
    MdInputModule,
    RouterModule.forChild([
      {path: '', component: DevolucaoLivroComponent}
    ])
  ],
  declarations: [DevolucaoLivroComponent],
  providers: [DevolucaoLivroComponent]
})
export class DevolucaoLivroModule { }
