import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class PlantService {

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

  constructor(private http: HttpClient) { }

  getPlants(id: number) {
    return this.http.get<any>('assets/plant.json');
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
//import { Injectable, inject } from '@angular/core';


/*import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http: HttpClient) {}

  getPlants(id: number) {
    return this.http.get<any>('assets/plant.json');
  }

}*/