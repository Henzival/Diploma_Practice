import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherForecastComponent {

}
