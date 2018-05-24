import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CadastroLivroComponent } from './cadastro-livro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    RouterModule.forChild([
      {path: '', component: CadastroLivroComponent}
    ])
  ],
  declarations: [CadastroLivroComponent],
  providers: [CadastroLivroComponent]
})
export class CadastroLivroModule { }
