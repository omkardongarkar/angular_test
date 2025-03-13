import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChartCardComponent } from './chart-card.component'
import { InfoCardComponent } from './info-card.component'
import { BarChartComponent } from './bar-chart.component'
import { PieChartComponent } from './pie-chart.component'

@Component({
  selector: 'app-comparison',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ChartCardComponent,
    InfoCardComponent,
    BarChartComponent,
    PieChartComponent,
  ],
})
export class ComparisonComponent {
  // Bar chart data
  barChartData = {
    labels: ['2024-12-01', '2024-12-02', '2024-12-03', '2024-12-04'],
    values: [225, 206, 207, 194],
  }

  // Pie chart data
  pieChartData = [
    { label: 'Headphones', value: 8.55, color: '#EA580C' },
    { label: 'Home Appliances', value: 17.09, color: '#9333EA' },
    { label: 'Kitchen Appliances', value: 10.26, color: '#16A34A' },
    { label: 'Smartphones', value: 25.64, color: '#DC2626' },
    { label: 'Laptops', value: 38.46, color: '#4F46E5' },
  ]

  // Performance metrics data
  performanceMetrics = [
    {
      label: 'Consistency',
      value: 'ChatAgent accurately retrieved comparison data for 87% of queries.',
    },
    {
      label: 'Comprehensiveness',
      value:
        'Detailed comparisons were provided for 75% of inquiries; gaps were observed for niche product types like gaming peripherals.',
    },
    { label: 'Response Time', value: 'Average response time was 4.2 seconds.' },
    {
      label: 'User Satisfaction',
      value: 'Satisfaction rate stood at 82% based on feedback surveys.',
    },
    {
      label: 'Escalations',
      value: '11% of users escalated requests due to incomplete or irrelevant comparison details.',
    },
  ]

  // Improvement suggestions data
  improvementSuggestions = [
    {
      label: 'Enhanced Data Coverage for Niche Categories',
      value: 'Extend support to niche products like gaming laptops and smart home devices.',
      example:
        'Example: A user comparing gaming monitors struggled due to missing refresh rate details.',
    },
    {
      label: 'Visual Comparison Charts',
      value: 'Provide side-by-side visual charts for features, specifications, and prices.',
      example:
        'Example: A user comparing wireless earbuds requested a more interactive format instead of text responses.',
    },
    {
      label: 'Contextual Recommendations',
      value: "Suggest alternatives based on the user's comparison history.",
      example:
        'Example: A user comparing mid-range smartphones was not shown premium options with discounts.',
    },
    {
      label: 'Advanced Filters in Comparisons',
      value:
        'Allow users to filter based on specific attributes like brand reputation or user ratings.',
      example:
        'Example: A user complained about manually scrolling through irrelevant data when comparing washing machines.',
    },
    {
      label: 'Follow-Up Assistance for Pending Queries',
      value: 'Automate follow-ups if users drop Interactions midway through comparisons.',
      example:
        'Example: A user who left the chat while comparing cameras was not reminded to revisit the session.',
    },
  ]
}
