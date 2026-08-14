import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})

export class PlantService {

  ngOnInit() { }

  async plantInfo() {
    console.log("1: Fetch startet");
    /*const response = await fetch(
      'https://trefle.io/api/v1/plants?token=usr-GJSaXOZN2GKx0_2WU8kKKYdPlh1iiDo88UruQsE248g'
    );*/
    const response = await CapacitorHttp.get({
      url: 'https://trefle.io/api/v1/plants?token=usr-GJSaXOZN2GKx0_2WU8kKKYdPlh1iiDo88UruQsE248g'
    });
    /* console.log("2: Antwort bekommen");
     const data = await response.json();
     console.log("3: Daten", data);
     return data.data;*/
    return response.data.data;
  }

  async localPlants() {
    const response = await fetch('assets/plant.json');
    return await response.json();
  }

  async getAllPlants() {
    const local = await this.localPlants();
    const trefle = await this.plantInfo();
    return [...local, ...trefle];
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



/* constructor(private http: HttpClient) { }

 async plantInfo() {
   return await firstValueFrom(
     this.http.get<any[]>('assets/plant.json')
   );
 }
 async getAllPlants() {
   const localPlants = await this.plantInfo();

   const response = await fetch(
     `https://trefle.io/api/v1/species?token=usr-GJSaXOZN2GKx0_2WU8kKKYdPlh1iiDo88UruQsE248g`
   );

   const trefle = await response.json();

   return [
     ...localPlants,
     ...trefle.data
   ];
 }
 async getPlantDetails(scientificName: string) {

   const search = await fetch(
     `https://trefle.io/api/v1/species/search?q=${scientificName}$&token=usr-GJSaXOZN2GKx0_2WU8kKKYdPlh1iiDo88UruQsE248g`
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

/* constructor(private http: HttpClient) { }

getPlants(id: number) {
  return this.http.get<any>('assets/plant.json');
}*/


