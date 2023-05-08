import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcSelectComponent } from './bc-select.component';

describe('BcSelectComponent', () => {
  let component: BcSelectComponent;
  let fixture: ComponentFixture<BcSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BcSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
