import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [
    IonContent,IonHeader,IonTitle,IonToolbar,CommonModule,FormsModule
  ]
})
export class MapPage implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute) {}

  map: any;

  marker: L.Marker | null = null;
  circle: L.Circle | null = null;

  targetLat = 0;
  targetLng = 0;

  ngOnInit() {

    this.route.queryParams.subscribe(params => {

      if (params['lat']) {

        this.targetLat = Number(params['lat']);
        this.targetLng = Number(params['lng']);

        console.log("Ziel:", this.targetLat, this.targetLng);

      }

    });

  }

  ngAfterViewInit() {

    navigator.geolocation.getCurrentPosition(

      (pos) => this.showMap(pos),
      () => alert("GPS nicht erlaubt")

    );

  }

  showMap(pos: GeolocationPosition) {

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
    this.marker = L.marker([lat, lng]).addTo(this.map);

    this.circle = L.circle([lat, lng], {
      radius: pos.coords.accuracy
    }).addTo(this.map);

    // Pflegeort anzeigen
    if (this.targetLat !== 0) {
      L.marker([this.targetLat, this.targetLng])
        .addTo(this.map)
        .bindPopup("Pflegeort")
        .openPopup();

      this.map.flyTo(
        [this.targetLat, this.targetLng],
        17
      );

    }

    navigator.geolocation.watchPosition(

      (pos) => this.updatePosition(pos),
      (err) => console.log(err)

    );

  }

  updatePosition(pos: GeolocationPosition) {

    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;

    if (this.marker) {

      this.marker.setLatLng([lat, lng]);

    }

    if (this.circle) {

      this.circle.setLatLng([lat, lng]);
      this.circle.setRadius(accuracy);

    }

  
    if (this.targetLat === 0) {

      this.map.panTo([lat, lng]);

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