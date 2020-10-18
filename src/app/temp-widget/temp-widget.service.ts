import { EventEmitter, Injectable } from '@angular/core';
import { TempWidgetComponent } from './temp-widget.component';

@Injectable({
  providedIn: 'root',
})
export class TempWidgetService {
  private updateFahrenheit = new EventEmitter<number>();
  private updateCelsius = new EventEmitter<number>();
  constructor() {}

  convertToCelsius(fahrenheit) {
    const c = (fahrenheit - 32) * (5 / 9);
    this.updateCelsius.emit(c);
  }

  convertToFahrenheit(celsius) {
    const f = celsius * (9 / 5) + 32;
    this.updateFahrenheit.emit(f);
  }

  getFahrenheitEmitter() {
    return this.updateFahrenheit;
  }

  getCelsiusEmitter() {
    return this.updateCelsius;
  }
}
