import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BottomHeaderComponent } from './header/bottom-header/bottom-header.component';
import { HomeSliderComponent } from './home/home-slider/home-slider.component';
import { HomeBrandsComponent } from './home/home-brands/home-brands.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    HomeComponent,
    HomeSliderComponent,
    HomeBrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
