import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [LoadingSpinnerComponent],
  declarations: [LoadingSpinnerComponent],
  exports: [LoadingSpinnerComponent]
})
export class LoadingSpinnerModule { }
