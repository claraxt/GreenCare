import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})

export class PlantService {
  ngOnInit() { }

  async plantInfo() {
    //lädt die pflanzen aus der Trefle API
    const response = await CapacitorHttp.get({
      url: 'https://trefle.io/api/v1/plants?token=usr-GJSaXOZN2GKx0_2WU8kKKYdPlh1iiDo88UruQsE248g'
    });
    //holt Pflanzendaten aus capacitor und trefle und gibt sie zurück
    return response.data.data;
  }

  async localPlants() {
    //lädt die pflanzen aus der .json
    const response = await fetch('assets/plant.json');
    return await response.json();
  }

  async getAllPlants() {
    //obere listen zusammengeführt
    const local = await this.localPlants();
    const trefle = await this.plantInfo();
    return [...local, ...trefle];
  }
}


