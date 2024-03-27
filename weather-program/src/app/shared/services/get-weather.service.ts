import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  constructor(public http: HttpClient) { }
  public getWeather(): Observable<any> {
    const lat = 55.1904;
    const lng = 30.2049;
    const params = 'cloudCover,waveHeight,airTemperature';
    return this.http.get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': ''
      }
    });
  }
}
