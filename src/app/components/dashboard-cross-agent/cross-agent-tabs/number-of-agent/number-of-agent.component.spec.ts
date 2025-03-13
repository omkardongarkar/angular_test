import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfAgentComponent } from './number-of-agent.component';

describe('NumberOfAgentComponent', () => {
  let component: NumberOfAgentComponent;
  let fixture: ComponentFixture<NumberOfAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberOfAgentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberOfAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
