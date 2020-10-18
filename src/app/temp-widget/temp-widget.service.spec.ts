import { TestBed } from '@angular/core/testing';

import { TempWidgetService } from './temp-widget.service';

describe('TempWidgetService', () => {
  let service: TempWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
