import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Town } from '../interfaces/town.interface';
import { mapTowns } from '../mappers/town.mapper';

@Injectable({
  providedIn: 'root',
})
export class GetTownService {
  constructor(public http: HttpClient) {}
  public getTown(): Observable<string[]> {
    return this.http.get<Town[]>('assets/town-list/city.list.min.json').pipe(
      map(mapTowns)
    );
  }
}
