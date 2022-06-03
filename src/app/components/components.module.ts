import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalConfig, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonsModule } from '../commons/commons.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { DropzoneComponent } from './dropzone/dropzone.component';



@NgModule({
  declarations: [HeaderComponent, MenuComponent, DropzoneComponent],
  imports: [
    CommonModule,
    CommonsModule,
    NgbModalModule
  ],
  exports: [HeaderComponent, DropzoneComponent]
})
export class ComponentsModule { }
