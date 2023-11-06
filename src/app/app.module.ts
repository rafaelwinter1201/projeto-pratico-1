import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Modules
import { HomeModule } from './modules/home/home.module';
import { FoodListComponent } from './shared/food-list/food-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
