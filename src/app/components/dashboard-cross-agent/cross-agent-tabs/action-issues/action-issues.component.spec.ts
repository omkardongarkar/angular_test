import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionIssuesComponent } from './action-issues.component';

describe('ActionIssuesComponent', () => {
  let component: ActionIssuesComponent;
  let fixture: ComponentFixture<ActionIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionIssuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActionIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
