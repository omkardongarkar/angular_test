import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopIssuesComponent } from './top-issues.component';

describe('TopIssuesComponent', () => {
  let component: TopIssuesComponent;
  let fixture: ComponentFixture<TopIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopIssuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
