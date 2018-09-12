import { CadastroAlunoComponent } from './cadastro-aluno.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdCardModule, MdButtonModule, MdButtonToggleModule } from '@angular/material';
import { CovalentCommonModule, CovalentDataTableModule, CovalentFileModule, CovalentMediaModule, CovalentNotificationsModule, CovalentPagingModule, CovalentSearchModule, CovalentStepsModule } from '@covalent/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
