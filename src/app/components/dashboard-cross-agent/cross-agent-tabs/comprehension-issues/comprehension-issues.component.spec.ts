import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprehensionIssuesComponent } from './comprehension-issues.component';

describe('ComprehensionIssuesComponent', () => {
  let component: ComprehensionIssuesComponent;
  let fixture: ComponentFixture<ComprehensionIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprehensionIssuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComprehensionIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
