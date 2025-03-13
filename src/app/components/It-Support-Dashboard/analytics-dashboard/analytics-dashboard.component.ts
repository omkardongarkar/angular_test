import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LineChartComponent } from './charts/line-chart.component'
import { PieChartComponent } from './charts/pie-chart.component'
import { MapChartComponent } from './charts/map-chart.component'

@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, LineChartComponent, PieChartComponent, MapChartComponent],
})
export class AnalyticsDashboardComponent implements OnInit {
  metrics = [
    { title: 'Daily Users', value: '4324' },
    { title: 'Sessions Handled', value: '6203' },
    { title: 'Resolution Rate', value: '3.5/5' },
    { title: 'Top Queries', value: '32' },
    { title: 'Top Issues', value: '12' },
    { title: 'Avg. Resolution Time', value: '3m 40s' },
    { title: 'Customer Satisfaction', value: '3.7/5' },
    { title: 'Agent Performance', value: '3.9/5' },
    { title: 'Error Rate', value: '13.6%' },
  ]

  insights = [
    {
      text: 'Users in Northeast are experiencing continued unusual low user sentiment.',
      severity: 'warning',
    },
    // ... other insights
  ]

  constructor() {}

  ngOnInit(): void {}
}
