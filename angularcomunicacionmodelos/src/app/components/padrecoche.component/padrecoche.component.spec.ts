import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrecocheComponent } from './padrecoche.component';

describe('PadrecocheComponent', () => {
  let component: PadrecocheComponent;
  let fixture: ComponentFixture<PadrecocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadrecocheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadrecocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
