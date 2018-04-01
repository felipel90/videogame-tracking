import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [],
})

export class HeaderModule { }
