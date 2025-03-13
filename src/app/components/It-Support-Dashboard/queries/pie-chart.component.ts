import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import Chart from 'chart.js/auto'

interface CategoryData {
  category: string
  percentage: number
  color: string
  borderColor: string
}

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PieChartComponent implements OnInit, AfterViewInit {
  @ViewChild('pieCanvas') private pieCanvas!: ElementRef

  pieChart: any

  // Data for the pie chart
  categoryData: CategoryData[] = [
    {
      category: 'Headphones',
      percentage: 8.55,
      color: '#FED7AA',
      borderColor: '#EA580C',
    },
    {
      category: 'Home Appliances',
      percentage: 17.09,
      color: '#D8B4FE',
      borderColor: '#9333EA',
    },
    {
      category: 'Kitchen Appliances',
      percentage: 10.26,
      color: '#BBF7D0',
      borderColor: '#16A34A',
    },
    {
      category: 'Smartphones',
      percentage: 25.64,
      color: '#FECACA',
      borderColor: '#DC2626',
    },
    {
      category: 'Laptops',
      percentage: 38.46,
      color: '#A5B4FC',
      borderColor: '#4F46E5',
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createPieChart()
  }

  createPieChart(): void {
    const ctx = this.pieCanvas.nativeElement.getContext('2d')

    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.categoryData.map((item) => item.category),
        datasets: [
          {
            data: this.categoryData.map((item) => item.percentage),
            backgroundColor: this.categoryData.map((item) => item.color),
            borderColor: this.categoryData.map((item) => item.borderColor),
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              font: {
                size: 12,
                family: 'Inter',
              },
              color: 'rgba(0, 0, 0, 0.7)',
              padding: 10,
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.label}: ${context.raw}%`
              },
            },
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: '#171717',
            bodyColor: '#171717',
            borderColor: '#d4d4d4',
            borderWidth: 1,
            padding: 10,
            displayColors: true,
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
