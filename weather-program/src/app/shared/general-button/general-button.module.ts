import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralButtonComponent } from './general-button.component';



@NgModule({
  declarations: [
    GeneralButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [GeneralButtonComponent]
})
export class GeneralButtonModule { }
