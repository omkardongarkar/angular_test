import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopQueriesComponent } from './home-top-queries.component';

describe('HomeTopQueriesComponent', () => {
  let component: HomeTopQueriesComponent;
  let fixture: ComponentFixture<HomeTopQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTopQueriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeTopQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
