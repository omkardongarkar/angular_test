import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCustomerSatisfactionComponent } from './home-customer-satisfaction.component';

describe('HomeCustomerSatisfactionComponent', () => {
  let component: HomeCustomerSatisfactionComponent;
  let fixture: ComponentFixture<HomeCustomerSatisfactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCustomerSatisfactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCustomerSatisfactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
