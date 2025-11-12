import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosdetailsComponent } from './empleadosdetails.component';

describe('EmpleadosdetailsComponent', () => {
  let component: EmpleadosdetailsComponent;
  let fixture: ComponentFixture<EmpleadosdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
