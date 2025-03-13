import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSatisfactionComponent } from './customer-satisfaction.component';

describe('CustomerSatisfactionComponent', () => {
  let component: CustomerSatisfactionComponent;
  let fixture: ComponentFixture<CustomerSatisfactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSatisfactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerSatisfactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
