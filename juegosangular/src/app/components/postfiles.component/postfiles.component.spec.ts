import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostfilesComponent } from './postfiles.component';

describe('PostfilesComponent', () => {
  let component: PostfilesComponent;
  let fixture: ComponentFixture<PostfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostfilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
