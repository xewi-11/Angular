import { TestBed } from '@angular/core/testing';

import { Servicefile } from './servicefile';

describe('Servicefile', () => {
  let service: Servicefile;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicefile);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
