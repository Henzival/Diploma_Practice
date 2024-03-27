import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GetWeatherService } from '../../shared/services/get-weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherForecastComponent {
  constructor(private weather: GetWeatherService) {
    this.weather.getWeather().subscribe((f: any) => {
      console.log(f);
    });
  }
}
