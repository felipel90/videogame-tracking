import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
  ],
  exports: [
    MaterialModule,
    FormsModule,
    CommonModule    
  ],
  declarations: [],
  providers: [],
})

export class SharedModule { }
