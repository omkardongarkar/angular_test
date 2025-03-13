import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Chart, registerables } from 'chart.js'
import { ChartData } from './dashboard.models'

Chart.register(...registerables)

@Component({
  selector: 'app-chart-section',
  templateUrl: './chart-section.component.html',
  styleUrls: ['./chart-section.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ChartSectionComponent implements OnInit, AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>

  chartData: ChartData[] = [
    { date: '2024-12-01', count: 318 },
    { date: '2024-12-02', count: 353 },
    { date: '2024-12-03', count: 366 },
    { date: '2024-12-04', count: 340 },
    { date: '2024-12-05', count: 378 },
  ]

  yAxisLabels = ['0', '100', '200', '300', '400']

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createChart()
  }

  createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d')

    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.chartData.map((item) => item.date),
          datasets: [
            {
              label: 'Total Users Asking for Recommendations',
              data: this.chartData.map((item) => item.count),
              backgroundColor: 'rgba(165, 180, 252, 0.8)',
              borderColor: '#4F46E5',
              borderWidth: 1,
              barPercentage: 0.8,
              categoryPercentage: 0.9,
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
              max: 400,
              ticks: {
                stepSize: 100,
                font: {
                  size: 12,
                },
                color: 'rgba(0, 0, 0, 0.7)',
              },
              grid: {
                color: 'rgba(0, 0, 26, 0.15)',
              },
            },
            x: {
              ticks: {
                font: {
                  size: 12,
                },
                color: 'rgba(0, 0, 0, 0.7)',
              },
              grid: {
                display: false,
              },
            },
          },
        },
      })
    }
  }
}
