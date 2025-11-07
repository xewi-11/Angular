import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonastandaloneComponent } from './personastandalone.component';

describe('PersonastandaloneComponent', () => {
  let component: PersonastandaloneComponent;
  let fixture: ComponentFixture<PersonastandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonastandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonastandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
