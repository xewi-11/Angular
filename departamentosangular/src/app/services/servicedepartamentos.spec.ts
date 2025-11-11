import { TestBed } from '@angular/core/testing';

import { Servicedepartamentos } from './servicedepartamentos';

describe('Servicedepartamentos', () => {
  let service: Servicedepartamentos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicedepartamentos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
