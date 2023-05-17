import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcSliderComponent } from './bc-slider.component';

describe('BcSliderComponent', () => {
  let component: BcSliderComponent;
  let fixture: ComponentFixture<BcSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BcSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
