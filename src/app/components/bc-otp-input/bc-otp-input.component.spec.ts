import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcOtpInputComponent } from './bc-otp-input.component';

describe('BcOtpInputComponent', () => {
  let component: BcOtpInputComponent;
  let fixture: ComponentFixture<BcOtpInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BcOtpInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcOtpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
