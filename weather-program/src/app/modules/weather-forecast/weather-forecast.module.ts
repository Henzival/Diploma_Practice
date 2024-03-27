import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherForecastComponent } from './weather-forecast.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    WeatherForecastComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [WeatherForecastComponent]
})
export class WeatherForecastModule { }
