import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChartSectionComponent } from './chart-section.component'
import { TableSectionComponent } from './table-section.component'
import { AssessmentSectionComponent } from './assessment-section.component'
import { ReviewSectionComponent } from './review-section.component'

@Component({
  selector: 'app-recommendation',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ChartSectionComponent,
    TableSectionComponent,
    AssessmentSectionComponent,
    ReviewSectionComponent,
  ],
})
export class RecommendationComponent {}
