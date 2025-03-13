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

interface BarChartData {
  labels: string[]
  values: number[]
}

@Component({
  selector: 'app-bar-chart',
  template: `
    <div class="bar-chart-container">
      <div class="y-axis">
        <div>200</div>
        <div class="y-value">150</div>
        <div class="y-value">100</div>
        <div class="y-value">50</div>
        <div class="y-value">0</div>
      </div>
      <div class="chart-area">
        <canvas #barChartCanvas></canvas>
      </div>
    </div>
    <div class="chart-legend">
      <div class="legend-item">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/08967d731b20f019f89b9552581172d2e8254afe875b6e2666e965474151fd3f?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5"
          class="legend-icon"
          alt="Legend icon"
        />
        <span class="legend-text">Total Warranty Queries Received</span>
      </div>
    </div>
  `,
  styles: [
    `
      .bar-chart-container {
        display: flex;
        height: 220px;
        width: 100%;
      }

      .y-axis {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 4px;
        align-items: flex-end;
        font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
        font-size: 12px;
        color: #000000;
        font-weight: 400;
      }

      .y-value {
        margin-top: 33px;
      }

      .chart-area {
        flex: 1;
        position: relative;
      }

      .chart-legend {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
        font-size: 12px;
        color: #000000;
        font-weight: 400;
      }

      .legend-item {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px;
      }

      .legend-icon {
        width: 16px;
        height: 16px;
        object-fit: contain;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() chartData: BarChartData = { labels: [], values: [] }
  @ViewChild('barChartCanvas') barChartCanvas!: ElementRef<HTMLCanvasElement>

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
    const ctx = this.barChartCanvas.nativeElement.getContext('2d')
    if (!ctx) return

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.chartData.labels,
        datasets: [
          {
            label: 'Total Warranty Queries Received',
            data: this.chartData.values,
            backgroundColor: 'rgba(5, 150, 105, 0.8)',
            borderColor: 'rgba(5, 150, 105, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // We're using custom legend
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return context.formattedValue
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 200,
            grid: {
              color: 'rgba(0, 0, 26, 0.15)',
            },
            border: {
              dash: [5, 5],
            },
            ticks: {
              display: false, // We're using custom y-axis labels
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 12,
                family: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
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
    this.chart.update()
  }
}
