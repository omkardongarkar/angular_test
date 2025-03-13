import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Chart, registerables } from 'chart.js'

// Register all Chart.js components
Chart.register(...registerables)

interface AssessmentItem {
  title: string
  description: string
}

interface SupportSuggestion {
  text: string
}

@Component({
  selector: 'app-product-quality-dashboard',
  templateUrl: './product-quality-dashboard.component.html',
  styleUrls: ['./product-quality-dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductQualityDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('barChart') barChartRef!: ElementRef
  @ViewChild('pieChart') pieChartRef!: ElementRef

  barChart: any
  pieChart: any

  // Data for bar chart
  barChartData = {
    labels: ['2024-12-01', '2024-12-02', '2024-12-03', '2024-12-04'],
    values: [224, 139, 190, 208],
  }

  // Data for pie chart
  pieChartData = {
    labels: [
      'Defective Parts',
      'Packaging Issues',
      'Performance Problems',
      'Cosmetic Damage',
      'Sizing Issues',
    ],
    values: [35, 25, 20, 15, 5],
    colors: ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#ede9fe'],
  }

  // Assessment data
  assessmentItems: AssessmentItem[] = [
    {
      title: 'Consistency',
      description:
        'The ChatAgent consistently flagged quality concerns accurately in 91% of interactions, providing the relevant support links or steps.',
    },
    {
      title: 'Comprehensiveness',
      description:
        'Queries involving complex issues (e.g., recurring defects in products) were inadequately handled in 12% of cases.',
    },
    {
      title: 'Response Time',
      description:
        'The average response time was 4.2 seconds, showing room for improvement for urgent quality issues.',
    },
    {
      title: 'User Satisfaction',
      description:
        '78% of users expressed satisfaction with the assistance, while dissatisfaction primarily stemmed from delayed resolutions.',
    },
    {
      title: 'Escalations',
      description:
        'Escalations occurred in 15% of cases due to unresolved issues, often requiring human intervention for clarity or action.',
    },
  ]

  // Support suggestions data
  supportSuggestions: SupportSuggestion[] = [
    {
      text: 'Offer live troubleshooting sessions via video or shared links for common product issues.',
    },
    {
      text: 'Provide users with a warranty validation and claim initiation tool within the chat.',
    },
    {
      text: 'Implement an automatic escalation system for recurring or severe quality issues.',
    },
    {
      text: 'Share preventive care and maintenance tips for specific product categories after addressing issues.',
    },
    {
      text: 'Notify users about recalled items or widely reported defects for relevant products.',
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initBarChart()
    this.initPieChart()
  }

  initBarChart(): void {
    const ctx = this.barChartRef.nativeElement.getContext('2d')

    this.barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.barChartData.labels,
        datasets: [
          {
            label: 'Total Quality Issue Requests',
            data: this.barChartData.values,
            backgroundColor: 'rgba(214, 219, 237, 0.4)',
            borderColor: 'rgba(147, 51, 234, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 240,
            ticks: {
              stepSize: 60,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
        },
      },
    })
  }

  initPieChart(): void {
    const ctx = this.pieChartRef.nativeElement.getContext('2d')

    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.pieChartData.labels,
        datasets: [
          {
            data: this.pieChartData.values,
            backgroundColor: this.pieChartData.colors,
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
            display: true,
            position: 'bottom',
          },
        },
      },
    })
  }
}
