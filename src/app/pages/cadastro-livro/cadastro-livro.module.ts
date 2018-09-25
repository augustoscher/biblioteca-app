import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdCardModule, MdButtonModule, MdButtonToggleModule, MdInputModule, MdSelectModule } from '@angular/material';
import { CovalentCommonModule, CovalentDataTableModule } from '@covalent/core';
import { CadastroLivroComponent } from './cadastro-livro.component';

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
      {path: '', component: CadastroLivroComponent}
    ])
  ],
  declarations: [CadastroLivroComponent],
  providers: [CadastroLivroComponent]
})
export class CadastroLivroModule { }
