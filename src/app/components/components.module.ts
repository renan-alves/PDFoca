import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CommonsModule } from '../commons/commons.module';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, DropzoneComponent],
  imports: [
    CommonModule,
    CommonsModule,
    NgbModalModule,
    HttpClientModule,
    NgxFileDropModule
  ],
  exports: [HeaderComponent, DropzoneComponent]
})
export class ComponentsModule { }
