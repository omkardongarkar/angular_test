import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AssessmentMetric } from './dashboard.models'

@Component({
  selector: 'app-assessment-section',
  templateUrl: './assessment-section.component.html',
  styleUrls: ['./assessment-section.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AssessmentSectionComponent {
  assessmentMetrics: AssessmentMetric[] = [
    {
      title: 'Personalized Recommendations:',
      description:
        'The agent provided personalized suggestions in 76% to 82% of cases, leading to better user engagement.',
    },
    {
      title: 'Relevant Matches:',
      description:
        'Accuracy of product matches based on user queries improved to 85%, compared to 78% the previous month.',
    },
    {
      title: 'Response Time:',
      description:
        'Average response time decreased from 3.8 seconds to 3.2 seconds, showcasing faster assistance.',
    },
    {
      title: 'Conversion Rates:',
      description: 'The overall conversion rate from recommendations rose from 34% to 38%.',
    },
    {
      title: 'User Satisfaction:',
      description: 'Users rated recommendations as "highly relevant" in 86% of feedback received.',
    },
  ]
}
