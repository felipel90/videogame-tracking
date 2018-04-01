import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatGridListModule, MatSlideToggleModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatSelectModule, MatSnackBarModule, MatProgressBarModule, MatIconModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [ 
    MatButtonModule, 
    MatToolbarModule,
    MatInputModule, 
    MatGridListModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [ 
    MatButtonModule, 
    MatToolbarModule, 
    MatInputModule, 
    MatGridListModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule
  ],
})

export class MaterialModule { }
