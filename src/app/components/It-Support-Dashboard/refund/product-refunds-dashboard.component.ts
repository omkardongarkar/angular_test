import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BaseChartDirective  } from 'ng2-charts'
import { ChartConfiguration, ChartData, ChartType } from 'chart.js'

interface ProductRefundData {
  date: string
  productA: number
  productB: number
  productC: number
  productD: number
  productE: number
}

interface PieChartData {
  label: string
  value: number
  color: string
}

@Component({
  selector: 'app-product-refunds-dashboard',
  templateUrl: './product-refunds-dashboard.component.html',
  styleUrls: ['./product-refunds-dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, BaseChartDirective ],
})
export class ProductRefundsDashboardComponent {
  // Bar chart data
  refundData: ProductRefundData[] = [
    {
      date: '2024-12-20',
      productA: 12,
      productB: 8,
      productC: 10,
      productD: 6,
      productE: 9,
    },
    {
      date: '2024-12-21',
      productA: 15,
      productB: 10,
      productC: 8,
      productD: 7,
      productE: 5,
    },
    {
      date: '2024-12-22',
      productA: 9,
      productB: 12,
      productC: 11,
      productD: 8,
      productE: 10,
    },
    {
      date: '2024-12-23',
      productA: 14,
      productB: 7,
      productC: 10,
      productD: 9,
      productE: 8,
    },
    {
      date: '2024-12-24',
      productA: 13,
      productB: 9,
      productC: 12,
      productD: 10,
      productE: 7,
    },
  ]

  // Bar chart configuration
  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        beginAtZero: true,
        max: 20,
        ticks: {
          stepSize: 5,
        },
        grid: {
          color: 'rgba(0, 0, 26, 0.15)',
          // borderDash: [5, 5],
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  }

  barChartLabels: string[] = this.refundData.map((item) => item.date)

  barChartType: ChartType = 'bar'

  barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: this.refundData.map((item) => item.productA),
        label: 'Product A',
        backgroundColor: 'rgba(79, 70, 229, 0.8)',
        borderColor: 'rgba(79, 70, 229, 1)',
        borderWidth: 1,
      },
      {
        data: this.refundData.map((item) => item.productB),
        label: 'Product B',
        backgroundColor: 'rgba(147, 51, 234, 0.8)',
        borderColor: 'rgba(147, 51, 234, 1)',
        borderWidth: 1,
      },
      {
        data: this.refundData.map((item) => item.productC),
        label: 'Product C',
        backgroundColor: 'rgba(5, 150, 105, 0.8)',
        borderColor: 'rgba(5, 150, 105, 1)',
        borderWidth: 1,
      },
      {
        data: this.refundData.map((item) => item.productD),
        label: 'Product D',
        backgroundColor: 'rgba(234, 88, 12, 0.8)',
        borderColor: 'rgba(234, 88, 12, 1)',
        borderWidth: 1,
      },
      {
        data: this.refundData.map((item) => item.productE),
        label: 'Product E',
        backgroundColor: 'rgba(220, 38, 38, 0.8)',
        borderColor: 'rgba(220, 38, 38, 1)',
        borderWidth: 1,
      },
    ],
  }

  // Pie chart data
  pieChartData: PieChartData[] = [
    { label: 'Defective Product', value: 35, color: 'rgba(79, 70, 229, 0.8)' },
    { label: 'Wrong Size/Fit', value: 25, color: 'rgba(147, 51, 234, 0.8)' },
    { label: 'Not as Described', value: 20, color: 'rgba(5, 150, 105, 0.8)' },
    { label: 'Arrived Late', value: 12, color: 'rgba(234, 88, 12, 0.8)' },
    { label: 'Changed Mind', value: 8, color: 'rgba(220, 38, 38, 0.8)' },
  ]

  pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 12,
            family: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
          },
        },
      },
    },
  }

  pieChartType: ChartType = 'pie'

  pieChartChartData: ChartData<'pie'> = {
    labels: this.pieChartData.map((item) => item.label),
    datasets: [
      {
        data: this.pieChartData.map((item) => item.value),
        backgroundColor: this.pieChartData.map((item) => item.color),
      },
    ],
  }

  // Weekly assessment data
  weeklyAssessmentItems = [
    {
      title: 'Information Consistency:',
      content:
        'The agent maintained an average accuracy rate of 89% to 92% in delivering consistent refund-related information.',
    },
    {
      title: 'Comprehensiveness:',
      content:
        'Responses covering refund policies and procedures were rated comprehensive in 85% to 88% of interactions.',
    },
    {
      title: 'Efforts to Reduce Returns:',
      content:
        'Proactive remediation, including alternate solutions or incentives, were offered in 74% to 79% of refund cases.',
    },
    {
      title: 'Discount Usage:',
      content:
        'Discount offers were utilized in 21% to 25% of cases to prevent refund requests, with a slight upward trend.',
    },
    {
      title: 'Response Time:',
      content:
        'Average response time improved from 5.4 minutes in Week 1 to 4.9 minutes in Week 2, demonstrating enhanced efficiency.',
    },
    {
      title: 'User Satisfaction:',
      content:
        'Customer satisfaction ratings for refund-related interactions increased from 81% to 84%.',
    },
    {
      title: 'Escalations:',
      content:
        'The number of escalated refund cases reduced from 18 to 12, indicating better chatbot performance and resolution strategies.',
    },
  ]

  // Additional support data
  additionalSupportItems = [
    {
      title: 'Guides and Tutorials:',
      content:
        'Introduce step-by-step guides on refund requests to make the process clearer for users.',
    },
    {
      title: 'Policy Transparency:',
      content:
        'Provide detailed explanations for exceptions, such as those related to promotional offers or limited warranties.',
    },
    {
      title: 'Agent Escalations:',
      content:
        'Enable quicker escalation to live agents when user frustration or dissatisfaction is detected.',
    },
    {
      title: 'Follow-up Support:',
      content:
        'Send follow-up communications, including direct links for unresolved refund issues.',
    },
    {
      title: 'Incentives:',
      content:
        'Offer personalized discount codes or future purchase vouchers for users experiencing refund challenges.',
    },
  ]

  // Product legend colors
  productColors = [
    { product: 'Product A', color: 'rgba(79, 70, 229, 1)' },
    { product: 'Product B', color: 'rgba(147, 51, 234, 1)' },
    { product: 'Product C', color: 'rgba(5, 150, 105, 1)' },
    { product: 'Product D', color: 'rgba(234, 88, 12, 1)' },
    { product: 'Product E', color: 'rgba(220, 38, 38, 1)' },
  ]
}
