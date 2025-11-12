import { TestBed } from '@angular/core/testing';

import { Serviceempleados } from './serviceempleados';

describe('Serviceempleados', () => {
  let service: Serviceempleados;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviceempleados);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
