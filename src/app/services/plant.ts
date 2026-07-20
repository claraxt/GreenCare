import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class PlantService {
  plant: Plant[] = [];
  ngOnInit() {

  }

  async plantInfo() {

    console.log("1: Fetch startet");

    const response = await fetch(
      'https://trefle.io/api/v1/plants?token=usr-GJSaXOZN2GKx0_2WU8kKKYdPlh1iiDo88UruQsE248g'
    );

    console.log("2: Antwort bekommen");

    const data = await response.json();

    console.log("3: Daten", data);

    return data.data;
  }
}
/*import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  async plantInfo() {

    const response = await CapacitorHttp.get({
      url: 'https://trefle.io/api/v1/plants?token=usr-GJSaXOZN2GKx0_2WU8kKKYdPlh1iiDo88UruQsE248g'
    });

    console.log(response.data);

    return response.data.data;
  }

}*/
/*import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrefleService {

  private http = inject(HttpClient);

  private baseUrl = 'https://trefle.io/api/v1';
  private token = 'usr-GJSaXOZN2GKx0_2WU8kKKYdPlh1iiDo88UruQsE248g';

  searchPlants(query: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/plants/search`,
      {
        params: {
          token: this.token,
          q: query
        }
      }
    );
  }

  getPlant(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/plants/${id}`,
      {
        params: {
          token: this.token
        }
      }
    );
  }
}*/
