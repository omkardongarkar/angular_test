import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-product-cart-value',
  templateUrl: './cart-value.component.html',
  styleUrls: ['./cart-value.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CartValueDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('dailyCountChart') dailyCountChartRef!: ElementRef
  @ViewChild('productFeaturesChart') productFeaturesChartRef!: ElementRef

  dailyCountChart: any
  productFeaturesChart: any

  // Data for daily count chart
  dailyCountData = {
    labels: ['2024-12-01', '2024-12-02', '2024-12-03', '2024-12-04', '2024-12-05'],
    values: [599.88, 708.73, 556.65, 646.58,539.05],
  }

  // Data for product features chart
  productFeaturesData = {
    labels: ['2024-12-01','2024-12-02','2024-12-03','2024-12-04','2024-12-05'],
    datasets: [
      {
        label: 'Discounts',
        data: [17.78 , 20.6 ,24.13,20.8 , 20.65],
        backgroundColor: 'rgba(79, 70, 229, 1)',
        borderColor: 'rgba(79, 70, 229, 1)',
        borderWidth: 1,
      },
      {
        label: 'Upseil Recommendation',
        data: [21.37 , 24.72, 21.02, 19.26 , 17.89],
        backgroundColor: 'rgba(234, 88, 12, 1)',
        borderColor: 'rgba(234, 88, 12, 1)',
        borderWidth: 1,
      },  
      {
        label: 'Abandoned Cart reminders',
        data: [22.6 , 24.44 , 21.25 , 19.89 , 20.65],
        backgroundColor: 'rgba(5, 150, 105, 1)',
        borderColor: 'rgba(5, 150, 105, 1)',
        borderWidth: 1,
      },
    ],
  }

  // Weekly assessment data
  weeklyAssessmentItems  = [
      {
        title: 'Consistency:',
        description:
          '92% accuracy in solutions provided during purchase assistance.',
      },
      {
        title: 'Comprehensiveness:',
        description:
          'Upselling opportunities suggested in 76% of cases.',
      },
      {
        title: 'Response Time:',
        description:
          'Average of 3.2 seconds.',
      },
      {
        title: 'User Satisfaction:',
        description: '85% approval in purchase-related assistance.',
      },
      {
        title: 'Escalations:',
        description: '9% escalations tied to confusion about discounts.',
      },
    ]

  // Weekly review data
  weeklyReviewItems = [
    {
      title: 'Improve upsell messaging.',
      description:
        '',
      example:
        'Example: Add a section for "Frequently Bought Together."',
    },
    {
      title: 'Highlight discounts early.',
      description: '',
      example:
        'Example: Ensure discount codes are visible during checkout.',
    },
    {
      title: 'Add cart-sharing feature. ',
      description:
        '',
      example: 'Example: Users can send cart details for feedback.',
    },
    {
      title: 'Streamline checkout.',
      description: "",
      example:
        'Example: Fewer clicks for payments.',
    },
    {
      title: 'Personalize suggestions.',
      description: '',
      example: 'Example: AI-powered recommendations for cart optimization.',
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
            // max: 100,
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
