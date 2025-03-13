import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import Chart from 'chart.js/auto'

interface BarChartData {
  labels: string[]
  values: number[]
}

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bar-chart-container">
      <div class="bar-chart">
        <div class="y-axis">
          <div class="tick">240</div>
          <div class="tick">180</div>
          <div class="tick">120</div>
          <div class="tick">60</div>
          <div class="tick">0</div>
        </div>
        <div class="chart-content">
          <canvas #barCanvas></canvas>
        </div>
      </div>
      <div class="chart-legend">
        <div class="legend-item">
          <div class="legend-color"></div>
          <div class="legend-label">Total Comparisons Requests</div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .bar-chart-container {
        height: 100%;
        display: flex;
        width: 500px;
        flex-direction: column;
      }

      .bar-chart {
        display: flex;
        padding: 24px 8px 8px 8px;
        height: 284px;

        @media (max-width: 640px) {
          padding: 16px 4px 4px 4px;
        }
      }

      .y-axis {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0 4px;
        color: rgba(0, 0, 0, 0.7);
        font-size: 12px;
      }

      .chart-content {
        flex: 1;
        position: relative;
      }

      .chart-legend {
        display: flex;
        justify-content: center;
        padding: 8px;
      }

      .legend-item {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px;
      }

      .legend-color {
        width: 8px;
        height: 8px;
        background: linear-gradient(180deg, #a5b4fc 0%, rgba(255, 255, 255, 0) 100%);
        border: 1px solid #4f46e5;
      }

      .legend-label {
        color: rgba(0, 0, 0, 0.7);
        font-size: 12px;
      }

      .tick {
        height: 20px;
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class BarChartComponent implements AfterViewInit {
  @Input() data: BarChartData = { labels: [], values: [] }
  @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>

  private chart: Chart | undefined

  ngAfterViewInit(): void {
    this.createChart()
  }

  private createChart(): void {
    const ctx = this.barCanvas.nativeElement.getContext('2d')

    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.data.labels,
          datasets: [
            {
              label: 'Total Comparisons Requests',
              data: this.data.values,
              backgroundColor: 'rgba(165, 180, 252, 0.8)',
              borderColor: '#4f46e5',
              borderWidth: 1,
              barPercentage: 0.7,
              categoryPercentage: 0.7,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return context.parsed.y.toString()
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 240,
              ticks: {
                stepSize: 60,
                display: false,
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.05)',
              },
              border: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  size: 12,
                },
                color: 'rgba(0, 0, 0, 0.7)',
              },
            },
          },
        },
      })
    }
  }
}
