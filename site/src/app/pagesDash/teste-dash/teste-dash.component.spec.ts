import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteDashComponent } from './teste-dash.component';

describe('TesteDashComponent', () => {
  let component: TesteDashComponent;
  let fixture: ComponentFixture<TesteDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
