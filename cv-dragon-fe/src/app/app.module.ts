import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    MainMenuComponent
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