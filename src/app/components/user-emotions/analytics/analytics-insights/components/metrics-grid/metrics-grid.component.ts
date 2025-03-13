import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

interface MetricCard {
  title: string
  value: string
  isActive?: boolean
}

@Component({
  selector: 'app-metrics-grid',
  templateUrl: './metrics-grid.component.html',
  styleUrls: ['./metrics-grid.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MetricsGridComponent {
  metrics: MetricCard[] = [
    { title: 'Topics', value: '124' },
    { title: 'User intents', value: '8' },
    { title: 'User actions', value: '43' },
    { title: 'Risky behaviours', value: '27' },
    { title: 'User sentiment', value: '3.6/5' },
    { title: 'User Emotions', value: '9', isActive: true },
    { title: 'Keywords', value: '42' },
    { title: 'User type', value: '15' },
    { title: 'RAG source', value: '78' },
  ]
}
