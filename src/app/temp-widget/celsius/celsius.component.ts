import { Component, OnInit } from '@angular/core';
import { TempWidgetService } from '../temp-widget.service';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  styleUrls: ['./celsius.component.css'],
})
export class CelsiusComponent implements OnInit {
  temp = 0;
  subscription: any;

  constructor(private tempService: TempWidgetService) {}

  ngOnInit(): void {
    this.subscription = this.tempService
      .getCelsiusEmitter()
      .subscribe((value) => {
        this.temp = value;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onInputChange(value) {
    this.temp = value;
    this.tempService.convertToFahrenheit(value);
  }
}
