import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-analytics-header',
  templateUrl: './analytics-header.component.html',
  styleUrls: ['./analytics-header.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AnalyticsHeaderComponent {
  filters = [
    {
      label: 'All Channels',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/d68be973e1dbdf913fe12bfcf4ef28f7d6390a84452aa194ac1a41bbccee9917?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
    },
    {
      label: 'All Queues',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/d68be973e1dbdf913fe12bfcf4ef28f7d6390a84452aa194ac1a41bbccee9917?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
    },
    {
      label: 'All Status',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/d68be973e1dbdf913fe12bfcf4ef28f7d6390a84452aa194ac1a41bbccee9917?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
    },
    {
      label: 'PST (UTC-8:00)',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/d68be973e1dbdf913fe12bfcf4ef28f7d6390a84452aa194ac1a41bbccee9917?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
    },
  ]

  actions = [
    {
      label: 'Filters',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/f98313d9f1c77e05bcb9abcfd486f7fddd38d6dd6f0916a66e9715de9d8a31f2?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
    },
    {
      label: 'Last 7 Days',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/d1925a0f9621432aa95847171beff4c3f4e27940614a72977eabe589a98e0163?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
    },
  ]
}
