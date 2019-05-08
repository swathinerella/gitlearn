import { NgModule } from '@angular/core';
// to display on browser
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies.component';
import { ProductComponent } from './products/product.component';
@NgModule({
    //all modules declared here
      imports: [
          BrowserModule
      ],

      //all components & pipes declared here
      declarations: [
          AppComponent,
          MoviesComponent,
          ProductComponent
    ],

    //only first component
      bootstrap: [
          AppComponent
      ],

      //all services 
      providers: []
})

export class AppModule{

}