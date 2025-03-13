import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

interface Metric {
  label: string
  value: string
  highlighted?: boolean
}

@Component({
  selector: 'app-metrics',
  templateUrl: './Metrics.component.html',
  styleUrls: ['./Metrics.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MetricsComponent {
  metrics: Metric[] = [
    { label: 'Topics', value: '124' },
    { label: 'User intents', value: '8', highlighted: true },
    { label: 'User actions', value: '43' },
    { label: 'Risky behaviours', value: '27' },
    { label: 'User sentiment', value: '3.6/5' },
    { label: 'Keywords', value: '42' },
    { label: 'Geography', value: '10' },
    { label: 'User type', value: '15' },
    { label: 'RAG source', value: '78' },
  ]
}
