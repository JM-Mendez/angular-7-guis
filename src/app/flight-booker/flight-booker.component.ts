import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-booker',
  templateUrl: './flight-booker.component.html',
  styleUrls: ['./flight-booker.component.css'],
})
export class FlightBookerComponent implements OnInit {
  flightType: 'one-way flight' | 'return flight' = 'one-way flight';

  constructor() {}

  ngOnInit(): void {}
}
