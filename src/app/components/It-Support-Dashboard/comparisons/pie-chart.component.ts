import { Component, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import Chart from 'chart.js/auto'

interface PieChartItem {
  label: string
  value: number
  color: string
}

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pie-chart-container">
      <canvas #pieCanvas></canvas>
    </div>
  `,
  styles: [
    `
      .pie-chart-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 380px;
        padding: 24px 8px 8px 8px;

        @media (max-width: 640px) {
          padding: 16px 4px 4px 4px;
        }
      }
    `,
  ],
})
export class PieChartComponent implements AfterViewInit {
  @Input() data: PieChartItem[] = []
  @ViewChild('pieCanvas') pieCanvas!: ElementRef<HTMLCanvasElement>

  private chart: Chart | undefined

  ngAfterViewInit(): void {
    this.createChart()
  }

  private createChart(): void {
    const ctx = this.pieCanvas.nativeElement.getContext('2d')

    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: this.data.map((item) => item.label),
          datasets: [
            {
              data: this.data.map((item) => item.value),
              backgroundColor: this.data.map((item) => this.createGradient(item.color)),
              borderColor: this.data.map((item) => item.color),
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: {
                  size: 12,
                  family: 'Inter',
                },
                color: 'rgba(0, 0, 0, 0.7)',
                padding: 10,
                generateLabels: (chart) => {
                  const datasets = chart.data.datasets
                  return chart.data.labels!.map((label, i) => {
                    const meta = chart.getDatasetMeta(0)
                    const style = meta.controller.getStyle(i, false);

                    return {
                      text: `${label}: ${this.data[i].value}%`,
                      fillStyle: style['backgroundColor'],
                      strokeStyle: style['borderColor'],
                      lineWidth: style['borderWidth'],
                      hidden: false,
                      index: i,
                    }
                  })
                },
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.label}: ${context.parsed}%`
                },
              },
            },
          },
        },
      })
    }
  }

  private createGradient(color: string): CanvasGradient {
    const ctx = this.pieCanvas.nativeElement.getContext('2d')!
    const gradient = ctx.createLinearGradient(0, 0, 0, 300)

    // Create a lighter version of the color for the gradient
    const lighterColor = this.hexToRgba(color, 0.3)

    gradient.addColorStop(0, lighterColor)
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

    return gradient
  }

  private hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
}
