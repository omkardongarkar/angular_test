import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyUsersComponent } from './daily-users.component';

describe('DailyUsersComponent', () => {
  let component: DailyUsersComponent;
  let fixture: ComponentFixture<DailyUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
