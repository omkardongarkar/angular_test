import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BarChartComponent } from './bar-chart.component'
import { PieChartComponent } from './pie-chart.component'

interface AssessmentItem {
  title: string
  content: string
}

interface SupportItem {
  title: string
  content: string
}

@Component({
  selector: 'app-warranty-dashboard',
  templateUrl: './warranty-dashboard.component.html',
  styleUrls: ['./warranty-dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, BarChartComponent, PieChartComponent],
})
export class WarrantyDashboardComponent implements OnInit {
  // Data for the bar chart
  barChartData = {
    labels: ['2024-12-01', '2024-12-02', '2024-12-03', '2024-12-04'],
    values: [175, 199, 177, 132],
  }

  // Data for the pie chart
  pieChartData = {
    labels: [
      'How long is my warranty?',
      'How do I register my product?',
      'What does the warranty cover?',
      'How do I make a claim?',
      'Other',
    ],
    values: [35, 25, 20, 15, 5],
    colors: ['#4BC0C0', '#FF6384', '#FFCE56', '#36A2EB', '#9966FF'],
  }

  // Data for the assessment list
  assessmentItems: AssessmentItem[] = [
    {
      title: 'Consistency',
      content:
        'The ChatAgent provided accurate warranty-related information 89% of the time, with a slight decrease in accuracy when users asked about specific cases or international claims.',
    },
    {
      title: 'Comprehensiveness',
      content:
        'While the ChatAgent generally covered basic warranty details (duration, coverage), it lacked the depth needed for complex queries about terms and conditions, leading to unsatisfactory responses in 14% of interactions.',
    },
    {
      title: 'Response Time',
      content:
        'The average response time for warranty queries was 3.7 seconds, generally fast but delayed when multiple clarifications were required.',
    },
    {
      title: 'User Satisfaction:',
      content:
        "83% of users were satisfied with the responses, especially when basic information was provided. Dissatisfaction occurred primarily for complex warranty issues or claims that the ChatAgent couldn't process.",
    },
    {
      title: 'Escalations',
      content:
        '18% of warranty-related queries were escalated to human agents, mainly because users needed precise details about specific product issues or international claims.',
    },
  ]

  // Data for the support list
  supportItems: SupportItem[] = [
    {
      title: 'Automated Warranty Registration:',
      content:
        'Allow users to register their product warranty through the ChatAgent to ensure immediate access to warranty details.',
    },
    {
      title: 'Interactive Warranty Calculator',
      content:
        'Introduce a tool where users can check if their product qualifies for warranty based on its usage, condition, and time of purchase.',
    },
    {
      title: 'Guided Warranty Claim Process:',
      content:
        'Offer a step-by-step guide for users to file warranty claims directly through the chatbot, including document submission and tracking claim status.',
    },
    {
      title: 'Cross-Linking to Product Support Pages:',
      content:
        "Integrate product-specific warranty pages and FAQs directly into the ChatAgent's responses to save time for users looking for detailed information.",
    },
    {
      title: 'Proactive Warranty Notifications:',
      content:
        'Implement notifications to alert users about warranty expirations, extension options, or policy changes that might affect them.',
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
