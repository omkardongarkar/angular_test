import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-metrics-card',
  templateUrl: './metrics-card.component.html',
  styleUrls: ['./metrics-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MetricsCardComponent {
  @Input() title: string = ''
  @Input() value: string = ''
  @Input() trend: string = ''
  @Input() trendDirection: 'up' | 'down' | 'neutral' = 'neutral'
  @Input() highlight: boolean = false
}
