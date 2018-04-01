import { NgModule } from '@angular/core';
import { FilterInputPipe } from './filter-input/filter-input.pipe';

@NgModule({
  imports: [],
  exports: [
    FilterInputPipe
  ],
  declarations: [
    FilterInputPipe
  ],
  providers: [],
})

export class PipesModule { 
  static forRoot() {
    return {
      ngNodule: PipesModule,
      priveders: [],
    }
  }
}
