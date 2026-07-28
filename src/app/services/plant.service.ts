import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http: HttpClient) {}

  async plantInfo() {
    return await firstValueFrom(
      this.http.get<any[]>('assets/plant.json')
    );
  }
async getPlantDetails(scientificName: string) {

  const search = await fetch(
    `https://trefle.io/api/v1/species/search?q=${scientificName}&token=usr-GJSaXOZN2GKx0_2WU8kKKYdPlh1iiDo88UruQsE248g`
  );

  const searchData = await search.json();

  const id = searchData.data[0].id;

  const detail = await fetch(
    `https://trefle.io/api/v1/species/${id}?token=usr-GJSaXOZN2GKx0_2WU8kKKYdPlh1iiDo88UruQsE248g`
  );

  const detailData = await detail.json();

  return detailData.data;

}
}