import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ComponentsModule } from '../components/components.module';
import { CommonsModule } from '../commons/commons.module';



@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    CommonsModule,
    ComponentsModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
