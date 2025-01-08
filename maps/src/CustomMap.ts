import * as L from 'leaflet'
export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  color: string
}
export class CustomMap {
  private leafletMap: L.Map
  
  constructor(protected mapId: string) {
    this.leafletMap = L.map(mapId).setView([51.505, -0.09], 2, {}),
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.leafletMap);
  }
  
  addMarker(mappable: Mappable): void {
    L.marker([mappable.location.lat, mappable.location.lng], {}).addTo(this.leafletMap)
  }
}