import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-booker',
  templateUrl: './flight-booker.component.html',
  styleUrls: ['./flight-booker.component.css'],
})
export class FlightBookerComponent implements OnInit {
  flightType: 'one-way flight' | 'return flight' = 'one-way flight';
  departure: Date;
  return: Date;

  constructor() {}

  ngOnInit(): void {}

  get minDate() {
    return `${this.departure?.getFullYear()}-${
      this.departure?.getMonth() + 1
    }-${this.departure?.getDate()}`;
  }
}
