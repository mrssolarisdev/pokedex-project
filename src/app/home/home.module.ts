import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Section1Component } from './section1/section1.component';



@NgModule({
  declarations: [
    HomeComponent,
    Section1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
