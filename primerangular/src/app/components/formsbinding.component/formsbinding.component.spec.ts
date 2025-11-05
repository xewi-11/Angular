import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsbindingComponent } from './formsbinding.component';

describe('FormsbindingComponent', () => {
  let component: FormsbindingComponent;
  let fixture: ComponentFixture<FormsbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsbindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
