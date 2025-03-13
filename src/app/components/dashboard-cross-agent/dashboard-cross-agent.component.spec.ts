import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCrossAgentComponent } from './dashboard-cross-agent.component';

describe('DashboardCrossAgentComponent', () => {
  let component: DashboardCrossAgentComponent;
  let fixture: ComponentFixture<DashboardCrossAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCrossAgentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardCrossAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
