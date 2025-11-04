import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primercomponent } from './primercomponent';

describe('Primercomponent', () => {
  let component: Primercomponent;
  let fixture: ComponentFixture<Primercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Primercomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Primercomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
