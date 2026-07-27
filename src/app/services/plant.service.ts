import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http: HttpClient) {}

  getPlants(id: number) {
    return this.http.get<any>('assets/plant.json');
  }

}