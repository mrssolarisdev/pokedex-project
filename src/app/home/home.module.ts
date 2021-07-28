import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { SearchbarModule } from '../searchbar/searchbar.module';
import { Section4FooterComponent } from './section4-footer/section4-footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4FooterComponent
  ],
  imports: [
    CommonModule,
    SearchbarModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
