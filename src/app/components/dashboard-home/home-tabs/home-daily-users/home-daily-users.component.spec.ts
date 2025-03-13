import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDailyUsersComponent } from './home-daily-users.component';

describe('HomeDailyUsersComponent', () => {
  let component: HomeDailyUsersComponent;
  let fixture: ComponentFixture<HomeDailyUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDailyUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDailyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
