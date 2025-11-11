import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPersonajesComponent } from './details.personajes.component';

describe('DetailsPersonajesComponent', () => {
  let component: DetailsPersonajesComponent;
  let fixture: ComponentFixture<DetailsPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsPersonajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
