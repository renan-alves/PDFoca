import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonsModule } from 'src/app/commons/commons.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CommonsModule,
    ComponentsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
