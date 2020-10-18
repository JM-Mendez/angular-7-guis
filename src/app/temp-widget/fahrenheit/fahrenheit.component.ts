import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { TempWidgetService } from '../temp-widget.service';

@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.css'],
})
export class FahrenheitComponent implements OnInit, OnDestroy {
  temp = 0;
  subscription: any;

  constructor(private tempService: TempWidgetService) {}

  ngOnInit(): void {
    this.subscription = this.tempService
      .getFahrenheitEmitter()
      .subscribe((value) => {
        this.temp = value;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onInputChange(value) {
    this.temp = value;
    this.tempService.convertToCelsius(value);
  }
}
