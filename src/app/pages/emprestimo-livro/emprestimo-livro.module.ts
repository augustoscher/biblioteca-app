import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdCardModule, MdButtonModule, MdButtonToggleModule, MdInputModule, MdSelectModule, MdDialogModule, MdTabsModule } from '@angular/material';
import { CovalentCommonModule, CovalentDataTableModule, CovalentStepsModule, CovalentSearchModule, CovalentNotificationsModule, CovalentMediaModule, CovalentFileModule, CovalentPagingModule } from '@covalent/core';
import { EmprestimoLivroComponent } from './emprestimo-livro.component';

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
    MdTabsModule,
    MdDialogModule,
    CovalentCommonModule, CovalentDataTableModule, CovalentFileModule, CovalentMediaModule, CovalentNotificationsModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
    RouterModule.forChild([
      {path: '', component: EmprestimoLivroComponent}
    ])
  ],
  declarations: [EmprestimoLivroComponent],
  providers: [EmprestimoLivroComponent]
})
export class EmprestimoLivroModule { }
