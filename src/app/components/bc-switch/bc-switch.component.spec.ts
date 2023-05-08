import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcSwitchComponent } from './bc-switch.component';

describe('BcSwitchComponent', () => {
  let component: BcSwitchComponent;
  let fixture: ComponentFixture<BcSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcSwitchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BcSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
