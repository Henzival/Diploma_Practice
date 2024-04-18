import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { WeatherForecastComponent } from './weather-forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneralButtonModule } from '../../shared/general-button/general-button.module';
import { IconModule } from '../../shared/directives/weather-icon.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WeatherForecastComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GeneralButtonModule,
    IconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [WeatherForecastComponent],
  providers: [DatePipe]
})
export class WeatherForecastModule { }
