import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MenuComponent } from './menu/menu.component';
import { SearchbarModule } from './searchbar/searchbar.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SearchbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
