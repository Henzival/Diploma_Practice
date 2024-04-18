import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherForecastModule } from './modules/weather-forecast/weather-forecast.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherForecastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
