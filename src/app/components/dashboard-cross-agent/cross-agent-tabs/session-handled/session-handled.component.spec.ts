import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionHandledComponent } from './session-handled.component';

describe('SessionHandledComponent', () => {
  let component: SessionHandledComponent;
  let fixture: ComponentFixture<SessionHandledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionHandledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionHandledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
