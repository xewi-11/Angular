import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijodeportesComponent } from './hijodeportes.component';

describe('HijodeportesComponent', () => {
  let component: HijodeportesComponent;
  let fixture: ComponentFixture<HijodeportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijodeportesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijodeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
