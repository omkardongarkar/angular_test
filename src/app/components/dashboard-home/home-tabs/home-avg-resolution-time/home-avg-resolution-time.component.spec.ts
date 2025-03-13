import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAvgResolutionTimeComponent } from './home-avg-resolution-time.component';

describe('HomeAvgResolutionTimeComponent', () => {
  let component: HomeAvgResolutionTimeComponent;
  let fixture: ComponentFixture<HomeAvgResolutionTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAvgResolutionTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeAvgResolutionTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
