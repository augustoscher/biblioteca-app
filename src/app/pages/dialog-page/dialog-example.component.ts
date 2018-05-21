import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html'
})
export class DialogExampleComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<DialogExampleComponent>) {}

  ngOnInit() {
  }

}
