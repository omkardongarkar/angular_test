import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeGapIssuesComponent } from './knowledge-gap-issues.component';

describe('KnowledgeGapIssuesComponent', () => {
  let component: KnowledgeGapIssuesComponent;
  let fixture: ComponentFixture<KnowledgeGapIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowledgeGapIssuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnowledgeGapIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
