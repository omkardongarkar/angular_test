import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ImprovementSuggestion } from './dashboard.models'

@Component({
  selector: 'app-review-section',
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.scss'],
  standalone: true,
  imports: [CommonModule],
})

 
export class ReviewSectionComponent {
  improvementSuggestions: ImprovementSuggestion[] = [
    {
      title: 'Improve upsell messaging.',
      description:
        '',
      example:
        'Example: Add a section for "Frequently Bought Together."',
    },
    {
      title: 'Highlight discounts early.',
      description: '',
      example:
        'Example: Ensure discount codes are visible during checkout.',
    },
    {
      title: 'Add cart-sharing feature. ',
      description:
        '',
      example: 'Example: Users can send cart details for feedback.',
    },
    {
      title: 'Streamline checkout.',
      description: "",
      example:
        'Example: Fewer clicks for payments.',
    },
    {
      title: 'Personalize suggestions.',
      description: '',
      example: 'Example: AI-powered recommendations for cart optimization.',
    },
  ]
}
