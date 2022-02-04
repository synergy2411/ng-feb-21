import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EagerlyComponent } from './components/eagerly/eagerly.component';

@NgModule({
  declarations :    [EagerlyComponent],
  imports :         [CommonModule],
  exports :         [EagerlyComponent]
})
export class EagerModule{

}
