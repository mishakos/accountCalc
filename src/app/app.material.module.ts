import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
})
export class AppMaterialModule { }
