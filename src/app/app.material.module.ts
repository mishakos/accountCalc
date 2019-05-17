import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCheckboxModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  exports: [
    MatToolbarModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
})
export class AppMaterialModule { }
