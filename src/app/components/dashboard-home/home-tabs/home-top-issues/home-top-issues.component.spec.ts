import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopIssuesComponent } from './home-top-issues.component';

describe('HomeTopIssuesComponent', () => {
  let component: HomeTopIssuesComponent;
  let fixture: ComponentFixture<HomeTopIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTopIssuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeTopIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
