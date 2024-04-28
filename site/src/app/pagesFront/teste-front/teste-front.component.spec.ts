import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteFrontComponent } from './teste-front.component';

describe('TesteFrontComponent', () => {
  let component: TesteFrontComponent;
  let fixture: ComponentFixture<TesteFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
