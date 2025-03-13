import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import Chart from 'chart.js/auto'

interface PieChartData {
  labels: string[]
  values: number[]
  colors: string[]
}

@Component({
  selector: 'app-pie-chart',
  template: `
    <div class="pie-chart-container">
      <canvas #pieChartCanvas></canvas>
    </div>
  `,
  styles: [
    `
      .pie-chart-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() chartData: PieChartData = { labels: [], values: [], colors: [] }
  @ViewChild('pieChartCanvas') pieChartCanvas!: ElementRef<HTMLCanvasElement>

  private chart: Chart | undefined

  constructor() {}

  ngOnInit(): void {
    // Chart will be initialized after view init when canvas is available
  }

  ngAfterViewInit(): void {
    this.createChart()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && !changes['chartData'].firstChange && this.chart) {
      this.updateChart()
    }
  }

  private createChart(): void {
    const ctx = this.pieChartCanvas.nativeElement.getContext('2d')
    if (!ctx) return

    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.chartData.labels,
        datasets: [
          {
            data: this.chartData.values,
            backgroundColor: this.chartData.colors,
            borderColor: '#ffffff',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              font: {
                size: 12,
                family: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
              },
              padding: 15,
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || ''
                const value = context.formattedValue
                return `${label}: ${value}%`
              },
            },
          },
        },
      },
    })
  }

  private updateChart(): void {
    if (!this.chart) return

    this.chart.data.labels = this.chartData.labels
    this.chart.data.datasets[0].data = this.chartData.values
    this.chart.data.datasets[0].backgroundColor = this.chartData.colors
    this.chart.update()
  }
}
