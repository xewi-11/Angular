import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertapersonajeComponent } from './insertapersonaje.component';

describe('InsertapersonajeComponent', () => {
  let component: InsertapersonajeComponent;
  let fixture: ComponentFixture<InsertapersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertapersonajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertapersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
