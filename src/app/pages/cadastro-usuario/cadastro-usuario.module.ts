import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdCardModule, MdButtonModule, MdButtonToggleModule, MdInputModule, MdSelectModule, MdAutocompleteModule, MdTabsModule, MdDialogModule } from '@angular/material';
import { CovalentCommonModule, CovalentDataTableModule } from '@covalent/core';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    ReactiveFormsModule,
    MdInputModule,
    MdButtonModule,
    MdTabsModule,
    MdButtonToggleModule,
    MdDialogModule,
    CovalentCommonModule, CovalentDataTableModule, 
    RouterModule.forChild([
      {path: '', component: CadastroUsuarioComponent}
    ])
  ],
  declarations: [CadastroUsuarioComponent],
  providers: [CadastroUsuarioComponent]
})
export class CadastroUsuarioModule { }
