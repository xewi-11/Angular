import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deportesv2Component } from './deportesv2.component';

describe('Deportesv2Component', () => {
  let component: Deportesv2Component;
  let fixture: ComponentFixture<Deportesv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Deportesv2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deportesv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
