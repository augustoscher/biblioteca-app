import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MdCardModule, MdDatepickerModule, MdInputModule, MdNativeDateModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatepickerPageComponent} from './datepicker-page.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    FormsModule,
    ReactiveFormsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule,
    RouterModule.forChild([
      {path: '', component: DatepickerPageComponent}
    ])
  ],
  declarations: [
    DatepickerPageComponent
  ]
})
export class DatepickerPageModule {
}
