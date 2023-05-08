import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcCheckboxComponent } from './bc-checkbox.component';

describe('BcCheckboxComponent', () => {
  let component: BcCheckboxComponent;
  let fixture: ComponentFixture<BcCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BcCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
