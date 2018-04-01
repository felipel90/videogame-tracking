import { NgModule } from '@angular/core';
import { BaseComponent } from './base';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule,
    HeaderModule
  ],
  exports: [
    BaseComponent
  ],
  declarations: [
    BaseComponent
  ],
  providers: [],
})

export class BaseModule { }
