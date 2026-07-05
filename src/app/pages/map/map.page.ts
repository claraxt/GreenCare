import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]

})
export class MapPage implements OnInit, AfterViewInit {

  constructor() { }
  map: any;
  marker: L.Marker | null = null;
  circle: L.Circle | null = null;


  ngOnInit() {

  }
  ngAfterViewInit() {
    navigator.geolocation.getCurrentPosition(
      (pos) => this.showMap(pos),
      (err) => alert('GPS nicht erlaubt')
    );
  }

  showMap(pos: GeolocationPosition) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    this.map = L.map('map').setView([lat, lng], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.marker = L.marker([lat, lng]).addTo(this.map);
    this.circle = L.circle([lat, lng], {
      radius: pos.coords.accuracy

    }).addTo(this.map);

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

    this.map.panTo([lat, lng]);
  }
}