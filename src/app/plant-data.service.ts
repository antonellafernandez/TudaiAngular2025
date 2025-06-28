import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from './plant-list/plant';
import { Observable, tap } from 'rxjs';

const URL = 'https://6820c491259dad2655ad8b91.mockapi.io/api/v1/plants';

@Injectable({
  providedIn: 'root'
})
export class PlantDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Plant[]> { // Consume REST API and return the obs in the response
    // fetch('url', {method: 'GET'})
    return this.http.get<Plant[]>(URL)
              .pipe(
                tap((plants: Plant[]) => plants.forEach(plant => plant.quantity = 0))
              ); 
  }

  public deletePlant(id: string): Observable<any> {
  return this.http.delete(`${URL}/${id}`);
  }
}