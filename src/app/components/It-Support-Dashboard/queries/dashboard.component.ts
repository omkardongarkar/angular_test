import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BarChartComponent } from './bar-chart.component'
import { PieChartComponent } from './pie-chart.component'
import { MetricsCardComponent } from './metrics-card.component'
import { SupportListComponent } from './support-list.component'
interface Metric {
  label: string
  value: string
}
@Component({
  selector: 'app-price-queries',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    BarChartComponent,
    PieChartComponent,
    // MetricsCardComponent,
    // SupportListComponent,
  ],
})
export class QueryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  supportItems: string[] = [
    'Integrate live pricing data to ensure responses reflect current discounts and offers.',
    'Provide recommendations for products slightly outside the queried price range to expand options.',
    'Implement filter-based query options for attributes like brand, feature, or model.',
    'Share historical pricing trends to assist users in decision-making.',
    'Notify users about upcoming discounts or sales matching their price range interests.',
  ]

  metrics: Metric[] = [
    {
      label: 'Consistency:',
      value:
        'ChatAgent successfully provided accurate price ranges for 89% of queries across categories.',
    },
    {
      label: 'Comprehensiveness:',
      value:
        'While most common ranges were addressed well, queries for customizable configurations (e.g., laptops with upgraded RAM) were occasionally incomplete.',
    },
    {
      label: 'Response Time:',
      value:
        "The average response time for price range queries was 3.8 seconds, a slight improvement from the previous week's 4.1 seconds.",
    },
    {
      label: 'User Satisfaction:',
      value:
        '84% of users were satisfied with the responses, while 9% expressed concerns over insufficient clarity.',
    },
    {
      label: 'Escalations:',
      value:
        'Escalation rate stood at 7%, mainly due to mismatches between the queried and provided price brackets',
    },
  ]
}
