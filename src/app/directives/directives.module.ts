import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphaNumericDirective } from './alpha-numeric.directive';

@NgModule({
  declarations: [AlphaNumericDirective],
  imports: [CommonModule],
  exports: [AlphaNumericDirective],
})
export class DirectivesModule {}
