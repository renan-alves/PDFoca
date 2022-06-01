import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonsModule } from 'src/app/commons/commons.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CommonsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
