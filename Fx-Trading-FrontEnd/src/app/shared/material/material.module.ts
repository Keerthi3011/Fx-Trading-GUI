import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialog
  ],
  exports:[
    MatDialog,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
