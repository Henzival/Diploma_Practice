import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { WeatherList } from '../interfaces/weather-list.interface';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  constructor(public http: HttpClient) { }
  @Input() public city = 'Minsk';
  public getWeather(): Observable<WeatherList[]> {
    return this.http.get<WeatherList>(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${environment.apiKey}`).pipe(map((f: any) => f.list));
  }
}
