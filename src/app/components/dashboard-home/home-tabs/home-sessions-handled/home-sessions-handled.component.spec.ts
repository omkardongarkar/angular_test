import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSessionsHandledComponent } from './home-sessions-handled.component';

describe('HomeSessionsHandledComponent', () => {
  let component: HomeSessionsHandledComponent;
  let fixture: ComponentFixture<HomeSessionsHandledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSessionsHandledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSessionsHandledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
