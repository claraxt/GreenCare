import { Component, OnInit, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { PlantDetailPage } from '../plant-detail/plant-detail.page';
import { ExploreService } from 'src/app/services/explore';
import { TaskCalendarService } from 'src/app/services/taskCalendar';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule
  ]
})
export class MapPage implements OnInit, AfterViewInit {
  private route = inject(ActivatedRoute);
  exploreService = inject(ExploreService);
  taskService = inject(TaskCalendarService);



  map: any;

  userMarker: L.Marker | null = null;
  plantMarker: L.Marker | null = null;
  taskMarker: { id: number, marker: L.Marker }[] = [];

  circle: L.Circle | null = null;

  targetLat = 0;
  targetLng = 0;

  ngOnInit() {

    this.route.queryParams.subscribe(params => {

      if (params['lat'] && params['lng']) {

        this.targetLat = Number(params['lat']);
        this.targetLng = Number(params['lng']);

        console.log("Neues Ziel:", this.targetLat, this.targetLng);

        if (this.map) {
          this.showPlantMarker();
        }

      }

    });

  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");

    navigator.geolocation.getCurrentPosition(
      (pos) => this.showMap(pos),
      (err) => {
        console.log('Geolocation Error:', err);
        alert(`${err.code}: ${err.message}`);
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 60000
      }
    );
  }

  showMap(pos: GeolocationPosition) {
    console.log("showMap gestartet");

    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    this.map = L.map('map').setView([lat, lng], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    const mapContainer = document.getElementById('map');

    if (mapContainer) {
      const resizeObserver = new ResizeObserver(() => {
        this.map.invalidateSize();

      });

      resizeObserver.observe(mapContainer);

    }

    this.newMarker();


    // Eigener Standort
    this.userMarker = L.marker([lat, lng]).addTo(this.map);

    this.circle = L.circle([lat, lng], {
      radius: pos.coords.accuracy
    }).addTo(this.map);

    this.showTaskMarker();

    setTimeout(() => {
      this.showPlantMarker();
    }, 100);

    navigator.geolocation.watchPosition(

      (pos) => this.updatePosition(pos),
      (err) => console.log(err)

    );

  }

  updatePosition(pos: GeolocationPosition) {

    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;

    if (this.userMarker) {

      this.userMarker.setLatLng([lat, lng]);

    }

    if (this.circle) {

      this.circle.setLatLng([lat, lng]);
      this.circle.setRadius(accuracy);

    }


    if (this.targetLat === 0) {

      this.map.panTo([lat, lng]);

    }

  }

  showPlantMarker() {

    if (!this.map || this.targetLat === 0) {
      return;
    }

    console.log("showPlantMarker läuft");


    // alten Pflanzenmarker entfernen idk ob wir sammeln wollen oder nah?? bräuchten vermutlcih iene netfern option
    if (this.plantMarker) {
      this.map.removeLayer(this.plantMarker);
    }


    // neue makrierung
    this.plantMarker = L.marker([
      this.targetLat,
      this.targetLng
    ])
      .addTo(this.map)
      .bindPopup("Pflegeort")
      .openPopup();


    // navigieren zu pflwgenort
    this.map.flyTo(
      [
        this.targetLat,
        this.targetLng
      ],
      17
    );

  }

  showTaskMarker() {

    this.taskMarker.forEach(item => {
      this.map.removeLayer(item.marker);
    });

    this.taskMarker = [];


    this.taskService.task.forEach((task: any) => {

      const plant = [
        ...(this.exploreService.plantsSuggested ?? []),
        ...(this.exploreService.plantsNearby ?? []),
        ...(this.exploreService.plantsNew ?? [])
      ].find(p => p.id === task.id);


      if (plant) {

        const marker = L.marker([
          plant.latitude,
          plant.longitude
        ])
          .addTo(this.map)
          .bindPopup(plant.name);


        this.taskMarker.push({
          id: plant.id,
          marker: marker
        });

      }

    });

  }
  delTaskMarker(id: number) {

    const found = this.taskMarker.find(
      item => item.id === id
    );

    if (found) {

      this.map.removeLayer(found.marker);

      this.taskMarker =
        this.taskMarker.filter(
          item => item.id !== id
        );

    }

  }

  newMarker() {

    this.map.on('click', (click: L.LeafletMouseEvent) => {

      const lat = click.latlng.lat;
      const lng = click.latlng.lng;

      L.marker([lat, lng]).addTo(this.map);

    });

  }

}