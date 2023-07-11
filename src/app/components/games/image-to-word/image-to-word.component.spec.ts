import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToWordComponent } from './image-to-word.component';

describe('ImageToWordComponent', () => {
  let component: ImageToWordComponent;
  let fixture: ComponentFixture<ImageToWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageToWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageToWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
