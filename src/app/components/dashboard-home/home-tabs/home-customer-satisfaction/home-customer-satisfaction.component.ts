import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import Chart from "chart.js/auto";

@Component({
  selector: 'app-home-customer-satisfaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-customer-satisfaction.component.html',
  styleUrl: './home-customer-satisfaction.component.scss'
})
export class HomeCustomerSatisfactionComponent implements OnInit, AfterViewInit {
  @ViewChild("custSatisfactionChart") custSatisfactionChart!: ElementRef<HTMLCanvasElement>;

  // Resolution rate data
  resolutionRateData = [
    { date: "Nov 24", value: 3.25 },
    { date: "Nov 25", value: 3.43 },
    { date: "Nov 26", value: 3.43 },
    { date: "Nov 27", value: 3.26 },
    { date: "Nov 28", value: 3.44 },
    { date: "Nov 29", value: 3.52 },
    { date: "Nov 30", value: 3.58 },
    { date: "Dec 1", value: 3.1 },
    { date: "Dec 2", value: 2.63 },
    { date: "Dec 3", value: 2.46 },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = this.custSatisfactionChart.nativeElement.getContext("2d");

    if (ctx) {
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.resolutionRateData.map((item) => item.date),
          datasets: [
            {
              label: "Customer Satisfaction",
              data: this.resolutionRateData.map((item) => item.value),
              backgroundColor: "rgba(165, 180, 252, 1)",
              borderColor: "rgba(79, 70, 229, 1)",
              borderWidth: 1,
              barPercentage: 0.6,
              categoryPercentage: 0.8,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: "top",
              labels: {
                font: {
                  family: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  size: 12,
                },
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `Customer Satisfaction Score: ${context.parsed.y}`;
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: false,
              min: 1,
              max: 5,
              ticks: {
                stepSize: 0.8,
                font: {
                  family: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  size: 12,
                },
              },
              grid: {
                color: "rgba(0, 0, 26, 0.15)",
                drawTicks: true,  
                drawBorder: true,
                // Fix TypeScript error by asserting correct type
                ...( { borderDash: [5, 5] } as any )  
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  family: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  size: 12,
                },
              },
            },
          },
        },
      });
    }
  }
}
