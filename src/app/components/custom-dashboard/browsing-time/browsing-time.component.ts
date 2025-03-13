import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import Chart from "chart.js/auto";

// Interface for assessment item
interface AssessmentItem {
  label: string;
  value: string;
}

// Interface for review item
interface ReviewItem {
  label: string;
  description: string;
  example: string;
}

@Component({
  selector: 'app-browsing-time',
  templateUrl: './browsing-time.component.html',
  styleUrls: ['./browsing-time.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class BrowsingTimeComponent implements OnInit, AfterViewInit {
  @ViewChild("pieChart") pieChartCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('dailyCountChart') dailyCountChartRef!: ElementRef

  productFeaturesChart: any
  dailyCountChart: any

  dailyCountData = {
    labels: ['2024-12-01', '2024-12-02', '2024-12-03', '2024-12-04'],
    values: [14.5,13.8,15.2,14],
  }
  // Assessment data
  assessmentData: AssessmentItem[] = [
    {
      label: "Consistency:",
      value:
        "ChatAgent provided accurate navigation assistance in 89% of interactions.",
    },
    {
      label: "Comprehensiveness:",
      value:
        "Coverage for product categories was comprehensive in 83% of cases, with gaps in niche segments like refurbished items.",
    },
    {
      label: "Response Time:",
      value: "Average response time was 3.4 seconds.",
    },
    {
      label: "User Satisfaction:",
      value: "Satisfaction rate for navigation queries stood at 84%.",
    },
    {
      label: "Escalations:",
      value:
        "About 9% of users escalated issues due to unclear or incomplete browsing guidance.",
    },
  ];

  // Review data
  reviewData: ReviewItem[] = [
    {
      label: "Enhanced Search Filters:",
      description:
        "Provide filters for specific needs like size, color, and technical features.",
      example:
        "Example: A user looking for budget-friendly laptops with specific RAM and processor requirements struggled to locate matching products.",
    },
    {
      label: "Recently Viewed Section:",
      description: "Help users quickly revisit items they viewed.",
      example:
        "Example: Users navigating back to previously explored products spent additional time searching again.",
    },
    {
      label: "Integrated Product Comparisons:",
      description:
        "Include a built-in tool for comparing specifications or reviews directly within the interface.",
      example:
        "Example: Users manually comparing features of smartphones spent ~10 minutes extra.",
    },
    {
      label: "Category-Specific Assistance:",
      description:
        "Offer targeted support for navigating categories with detailed options, like home appliances.",
      example:
        "Example: A user browsing refrigerators complained about the lack of breakdown by capacity and energy rating.",
    },
    {
      label: "Personalized Recommendations:",
      description:
        "Show recommendations based on browsing history to shorten decision-making time.",
      example:
        "Example: A user browsing similar items multiple times found no tailored suggestions.",
    },
  ];

  // Data for the pie chart
  pieChartData = {
    labels: [
      "Unclear Product Descriptions",
      "Limited Search Filters",
      "Frequent Navigation Issues",
      "Product Comparisons",
      "Complex Product Categories",
    ],
    datasets: [
      {
        data: [8.55, 17.09, 10.26, 25.64, 38.46],
        backgroundColor: [
          "rgba(254, 215, 170, 0.8)",
          "rgba(216, 180, 254, 0.8)",
          "rgba(187, 247, 208, 0.8)",
          "rgba(254, 202, 202, 0.8)",
          "rgba(165, 180, 252, 0.8)",
        ],
        borderColor: ["#EA580C", "#9333EA", "#16A34A", "#DC2626", "#4F46E5"],
        borderWidth: 2,
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initDailyCountChart();
    this.createPieChart();
  }
initDailyCountChart(): void {
    const ctx = this.dailyCountChartRef.nativeElement.getContext('2d')

    this.dailyCountChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.dailyCountData.labels,
        datasets: [
          {
            label: 'Average Browsing Time (Minutes)',
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
              stepSize: 5,
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

  createPieChart(): void {
    if (this.pieChartCanvas) {
      const ctx = this.pieChartCanvas.nativeElement.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "pie",
          data: this.pieChartData,
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
                    return `${context.label}: ${context.raw}%`;
                  },
                },
              },
            },
          },
        });
      }
    }
  }
}
