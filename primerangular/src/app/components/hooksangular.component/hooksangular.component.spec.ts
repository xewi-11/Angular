import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksangularComponent } from './hooksangular.component';

describe('HooksangularComponent', () => {
  let component: HooksangularComponent;
  let fixture: ComponentFixture<HooksangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HooksangularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooksangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
