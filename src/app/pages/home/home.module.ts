import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [    
    SharedModule
  ],
  exports: [
    HomePage
  ],
  declarations: [
    HomePage
  ],
  providers: [],
})

export class HomeModule { }
