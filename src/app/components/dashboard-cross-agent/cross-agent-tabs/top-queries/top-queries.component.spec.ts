import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopQueriesComponent } from './top-queries.component';

describe('TopQueriesComponent', () => {
  let component: TopQueriesComponent;
  let fixture: ComponentFixture<TopQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopQueriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
