import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcInputComponent } from './bc-input.component';

describe('BcInputComponent', () => {
  let component: BcInputComponent;
  let fixture: ComponentFixture<BcInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BcInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
