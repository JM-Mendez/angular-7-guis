import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  styleUrls: ['./celsius.component.css'],
})
export class CelsiusComponent implements OnInit {
  temp = 0;

  constructor() {}

  ngOnInit(): void {}

  onInputChange(value) {
    this.temp = value;
  }
}
