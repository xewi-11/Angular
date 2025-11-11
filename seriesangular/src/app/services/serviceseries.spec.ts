import { TestBed } from '@angular/core/testing';

import { Serviceseries } from './serviceseries';

describe('Serviceseries', () => {
  let service: Serviceseries;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviceseries);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
