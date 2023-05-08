import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxPageComponent } from './checkbox-page.component';

describe('CheckboxPageComponent', () => {
  let component: CheckboxPageComponent;
  let fixture: ComponentFixture<CheckboxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
