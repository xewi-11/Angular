import { TestBed } from '@angular/core/testing';

import { Servicefutbol } from './servicefutbol';

describe('Servicefutbol', () => {
  let service: Servicefutbol;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicefutbol);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
