import { Component, Input } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'weather-preview',
  template: `
    <div class="weather-preview" *ngIf="weather">
      <i [ngClass]="getIcon()"></i>
      It's {{ weather.item.condition.temp }}°{{ weather.units.temperature }} in
      {{ weather.location.city }}
      right now.
    </div>
  `
})
export class WeatherPreview {
  @Input() weather;

  constructor(private service: WeatherService) {}

  ngOnInit() {
    console.log('this.service', this.service)
  }

  getIcon() {
    return 'wi ' + this.service.getIcon(this.weather.item.condition)
  }
}

