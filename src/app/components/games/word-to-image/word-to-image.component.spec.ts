import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordToImageComponent } from './word-to-image.component';

describe('WordToImageComponent', () => {
  let component: WordToImageComponent;
  let fixture: ComponentFixture<WordToImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordToImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordToImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
