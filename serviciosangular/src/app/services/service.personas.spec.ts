import { TestBed } from '@angular/core/testing';

import { ServicePersonas } from './service.personas';

describe('ServicePersonas', () => {
  let service: ServicePersonas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePersonas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
