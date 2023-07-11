import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirafireComponent } from './firafire.component';

describe('FirafireComponent', () => {
  let component: FirafireComponent;
  let fixture: ComponentFixture<FirafireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirafireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirafireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
