import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {
  constructor(public http: HttpClient) { }
  public getWeather(): Observable<any> {
    const lat = 58.7984;
    const lng = 17.8081;
    const params = 'waveHeight,airTemperature';
    return this.http.get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': '0e5b940e-ec2b-11ee-aa40-0242ac130002-0e5b9468-ec2b-11ee-aa40-0242ac130002'
      }
    });
  }
}
