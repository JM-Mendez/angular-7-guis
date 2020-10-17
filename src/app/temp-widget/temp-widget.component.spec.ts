import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempWidgetComponent } from './temp-widget.component';

describe('TempWidgetComponent', () => {
  let component: TempWidgetComponent;
  let fixture: ComponentFixture<TempWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
