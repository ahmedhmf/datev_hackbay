import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MaterialModule } from './material.module';
import { FormComponent } from './upload-cv/form/form.component';
import { UploadCvComponent } from './upload-cv/upload-cv.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OpenedPositionsComponent } from './opened-positions/opened-positions.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    MainMenuComponent,
    FormComponent,
    UploadCvComponent,
    OpenedPositionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
