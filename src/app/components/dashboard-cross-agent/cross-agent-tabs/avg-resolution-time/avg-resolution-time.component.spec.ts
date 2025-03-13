import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgResolutionTimeComponent } from './avg-resolution-time.component';

describe('AvgResolutionTimeComponent', () => {
  let component: AvgResolutionTimeComponent;
  let fixture: ComponentFixture<AvgResolutionTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvgResolutionTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvgResolutionTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
