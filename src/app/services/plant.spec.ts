import { TestBed } from '@angular/core/testing';

import { Plant } from './plant.service';

describe('Plant', () => {
  let service: Plant;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Plant);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
