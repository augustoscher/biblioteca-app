import { NgModule } from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    imports: [FormsModule, BrowserModule,  ReactiveFormsModule],
    providers: [FormsModule, BrowserModule, ReactiveFormsModule],
    declarations: [FormsModule, BrowserModule, ReactiveFormsModule]
})
export class SharedModule {

}