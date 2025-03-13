import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResolutionRateComponent } from './home-resolution-rate.component';

describe('HomeResolutionRateComponent', () => {
  let component: HomeResolutionRateComponent;
  let fixture: ComponentFixture<HomeResolutionRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeResolutionRateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeResolutionRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
