import { ApplicationRef, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { GetWeatherService } from '../../shared/services/get-weather.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { GetTownService } from '../../shared/services/get-town-service';
import { Observable, map, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@UntilDestroy()
@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class WeatherForecastComponent {
  public date = Date.now();
  public weekDay = this.getDaysOfWeek();
  public time$: Observable<Date> = timer(0, 1000).pipe(map(() => new Date()));
  public hours = this.getHours();
  public tokenClient!: any;
  public gapiInited = false;
  public gisInited = false;
  searchForm!: FormGroup;
  constructor(
    private datePipe: DatePipe,
    public weather: GetWeatherService,
    private townService: GetTownService,
    private http: HttpClient,
    private fb: FormBuilder,
    private detect: ApplicationRef
  ) {
    this.weatherObs$ = this.weather.getWeather();
    this.createForm();
  }

  public isWeatherDaily: boolean = true;
  public weatherObs$!: Observable<Array<any>>;
  private createForm(): void {
    this.searchForm = this.fb.group(
      {
        town: [''] 
      },
    );
  }
  public getDaysOfWeek(): string[] {
    const days: string[] = [];
    const currentDate = new Date();
    for (let i = 0; i < 5; i++) {
      const day = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);
      const formattedDay: any = this.datePipe.transform(day, 'EEEE');
      days.push(formattedDay);
    }
    days.shift();
    days.unshift('Today');
    return days;
  }
  public getHours(): string[] {
    const hours: string[] = [];
    const currentDate = new Date();
    for (let i = 0; i < 15; i += 3) {
      const day = new Date(currentDate.getTime() + i * 60 * 60 * 1000);
      const formattedDay: any = this.datePipe.transform(day, 'HH:mm');
      hours.push(formattedDay);
    }
    hours.shift();
    hours.unshift('Now');
    return hours;
  }
  public onSubmit() {
    const handler = (array: any) => {
      this.weather.city = array.filter((f: any) => {
        return f === this.searchForm.value.town;
      })[0];
    }
    this.townService.getTown().subscribe((f: string[]) => {
      handler(f);
      this.weatherObs$ = this.weather.getWeather();
    });
  }
  public handleAuthClick() {
    async function listUpcomingEvents() {
      let response;
      try {
        const request = {
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime',
        };
        alert('aaaa');
      } catch (err) {
        return;
      }
    };
    this.tokenClient.callback = async (resp: any) => {
      if (resp.error !== undefined) {
        throw (resp);
      }
      await listUpcomingEvents();
    }
  }
  public handleSignoutClick() {
    if (this.tokenClient !== null) {
      this.tokenClient.accounts.oauth2.revoke();
    }
  }
}
