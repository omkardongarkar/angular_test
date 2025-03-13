import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RecommendationComponent } from './dashboard.component'
import { ChartSectionComponent } from './chart-section.component'
import { TableSectionComponent } from './table-section.component'
import { AssessmentSectionComponent } from './assessment-section.component'
import { ReviewSectionComponent } from './review-section.component'

describe('RecommendationComponent', () => {
  let component: RecommendationComponent
  let fixture: ComponentFixture<RecommendationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RecommendationComponent,
        ChartSectionComponent,
        TableSectionComponent,
        AssessmentSectionComponent,
        ReviewSectionComponent,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(RecommendationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
