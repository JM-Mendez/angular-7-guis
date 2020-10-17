import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TempWidgetComponent } from './temp-widget/temp-widget.component';
import { CelsiusComponent } from './temp-widget/celsius/celsius.component';
import { FahrenheitComponent } from './temp-widget/fahrenheit/fahrenheit.component';

@NgModule({
  declarations: [
    AppComponent,
    TempWidgetComponent,
    CelsiusComponent,
    FahrenheitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
