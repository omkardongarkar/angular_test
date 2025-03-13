import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @ViewChild('barCanvas') private barCanvas!: ElementRef

  barChart: any

  // Data for the chart
  barData = {
    labels: ['2024-12-01', '2024-12-02', '2024-12-03', '2024-12-04'],
    values: [201, 217, 258, 194],
  }

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createBarChart()
  }

  createBarChart(): void {
    const ctx = this.barCanvas.nativeElement.getContext('2d')

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.barData.labels,
        datasets: [
          {
            label: 'Total Price Range Requests',
            data: this.barData.values,
            backgroundColor: 'rgba(167, 243, 208, 0.7)',
            borderColor: '#059669',
            borderWidth: 1,
            borderRadius: 0,
            barPercentage: 0.7,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 280,
            ticks: {
              stepSize: 70,
              font: {
                size: 12,
                family: 'Inter',
              },
              color: 'rgba(0, 0, 0, 0.7)',
            },
            grid: {
              color: 'rgba(0, 0, 26, 0.15)',
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 12,
                family: 'Inter',
              },
              color: 'rgba(0, 0, 0, 0.7)',
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              font: {
                size: 12,
                family: 'Inter',
              },
              color: 'rgba(0, 0, 0, 0.7)',
              boxWidth: 8,
              padding: 10,
            },
          },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: '#171717',
            bodyColor: '#171717',
            borderColor: '#d4d4d4',
            borderWidth: 1,
            padding: 10,
            displayColors: false,
            titleFont: {
              size: 12,
              family: 'Inter',
              weight: 'bold',
            },
            bodyFont: {
              size: 12,
              family: 'Inter',
            },
          },
        },
      },
    })
  }
}
