import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-product-features-dashboard',
  templateUrl: './product-features-dashboard.component.html',
  styleUrls: ['./product-features-dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductFeaturesDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('dailyCountChart') dailyCountChartRef!: ElementRef
  @ViewChild('productFeaturesChart') productFeaturesChartRef!: ElementRef

  dailyCountChart: any
  productFeaturesChart: any

  // Data for daily count chart
  dailyCountData = {
    labels: ['2024-12-01', '2024-12-02', '2024-12-03', '2024-12-04', '2024-12-05'],
    values: [60.15, 52.14, 66.93, 61.93, 53.08],
  }

  // Data for product features chart
  productFeaturesData = {
    labels: ['26 Nov', '27 Nov', '28 Nov', '30 Nov'],
    datasets: [
      {
        label: 'Battery Life',
        data: [33, 22, 25, 15],
        backgroundColor: 'rgba(79, 70, 229, 1)',
        borderColor: 'rgba(79, 70, 229, 1)',
        borderWidth: 1,
      },
      {
        label: 'Hardware',
        data: [32, 22, 36, 28],
        backgroundColor: 'rgba(234, 88, 12, 1)',
        borderColor: 'rgba(234, 88, 12, 1)',
        borderWidth: 1,
      },
      {
        label: 'Processor Speed',
        data: [33, 42, 21, 40],
        backgroundColor: 'rgba(5, 150, 105, 1)',
        borderColor: 'rgba(5, 150, 105, 1)',
        borderWidth: 1,
      },
      {
        label: 'Screen Size',
        data: [26, 37, 44, 25],
        backgroundColor: 'rgba(147, 51, 234, 1)',
        borderColor: 'rgba(147, 51, 234, 1)',
        borderWidth: 1,
      },
      {
        label: 'Warranty Coverage',
        data: [41, 30, 17, 25],
        backgroundColor: 'rgba(220, 38, 38, 1)',
        borderColor: 'rgba(220, 38, 38, 1)',
        borderWidth: 1,
      },
    ],
  }

  // Weekly assessment data
  weeklyAssessmentItems = [
    {
      title: 'Information Consistency',
      content:
        'The agent maintained 88% consistency in delivering accurate feature information, ensuring alignment with the knowledge base.',
    },
    {
      title: 'Comprehensiveness',
      content:
        'The depth of explanations improved, with 81% of user feedback indicating satisfaction with the level of detail provided.',
    },
    {
      title: 'Response Time',
      content:
        'Average response time for feature inquiries was 3.6 seconds, slightly faster than the weekly average of 3.8 seconds.',
    },
    {
      title: 'User Satisfaction',
      content:
        "Users rated the agent's responses as helpful in 84% of cases. However, dissatisfaction due to incomplete answers accounted for 16%.",
    },
    {
      title: 'Escalations',
      content:
        'Escalation rates for feature-related inquiries were higher for complex questions, particularly around technical specifications (12% of total escalations).',
    },
  ]

  // Weekly review data
  weeklyReviewItems = [
    {
      title: 'Expanded Knowledge Base:',
      content: 'Include deeper technical details and user manuals for complex products.',
      example:
        'A user asking about smartphone camera features could have benefited from examples or a video link.',
    },
    {
      title: 'Interactive Media:',
      content: 'Add visuals or interactive guides for product features.',
      example: 'A query about dishwasher modes could display a feature comparison chart.',
    },
    {
      title: 'Follow-Up Options:',
      content: 'Offer users the ability to save or revisit information for comparison.',
      example: 'A user browsing laptop features could bookmark specifications for later review.',
    },
    {
      title: 'Live Technical Support:',
      content: 'Provide direct access to a technical expert for highly specific queries.',
      example:
        'A user asking about TV refresh rates and gaming compatibility required escalation due to lack of direct assistance.',
    },
    {
      title: 'Enhanced Cross-Referencing:',
      content: 'Improve cross-referencing between similar products or features.',
      example:
        'A user asking about vacuum cleaners could benefit from side-by-side feature comparisons.',
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initDailyCountChart()
    this.initProductFeaturesChart()
  }

  initDailyCountChart(): void {
    const ctx = this.dailyCountChartRef.nativeElement.getContext('2d')

    this.dailyCountChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.dailyCountData.labels,
        datasets: [
          {
            label: 'Users Requesting Information About Product Features',
            data: this.dailyCountData.values,
            backgroundColor: 'rgba(214, 219, 237, 0.4)',
            borderColor: 'rgba(147, 51, 234, 1)',
            borderWidth: 1,
            barPercentage: 0.6,
            categoryPercentage: 0.8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 25,
            },
            grid: {
              // drawBorder: false,
              color: 'rgba(0, 0, 26, 0.15)',
              lineWidth: 1,
              drawTicks: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    })
  }

  initProductFeaturesChart(): void {
    const ctx = this.productFeaturesChartRef.nativeElement.getContext('2d')

    this.productFeaturesChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.productFeaturesData.labels,
        datasets: this.productFeaturesData.datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 45,
            ticks: {
              stepSize: 15,
            },
            grid: {
              // drawBorder: false,
              color: 'rgba(0, 0, 26, 0.15)',
              lineWidth: 1,
              drawTicks: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    })
  }
}
