import { NgModule } from '@angular/core';
import { CatalogPage } from './catalog';
import { SharedModule } from '../../shared/shared.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    SharedModule,
    PipesModule
  ],
  exports: [
    CatalogPage    
  ],
  declarations: [
    CatalogPage    
  ],
  providers: [],
})

export class CatalogModule { }
