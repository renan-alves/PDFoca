import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { AnchorComponent } from './anchor/anchor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [ButtonComponent, AnchorComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ButtonComponent, AnchorComponent]
})
export class CommonsModule { }
