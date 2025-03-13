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
  selector: 'app-home-avg-resolution-time',
  standalone: true,
  imports: [],
  templateUrl: './home-avg-resolution-time.component.html',
  styleUrl: './home-avg-resolution-time.component.scss'
})
export class HomeAvgResolutionTimeComponent implements OnInit, AfterViewInit {
  @ViewChild("avgResolutionChart") avgResolutionChart!: ElementRef<HTMLCanvasElement>;

  // Resolution rate data
  resolutionRateData = [
    { date: "Nov 24", value: 18 },
    { date: "Nov 25", value: 18 },
    { date: "Nov 26", value: 22 },
    { date: "Nov 27", value: 27 },
    { date: "Nov 28", value: 23 },
    { date: "Nov 29", value: 22 },
    { date: "Nov 30", value: 16 },
    { date: "Dec 1", value: 9 },
    { date: "Dec 2", value: 21 },
    { date: "Dec 3", value: 31 },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = this.avgResolutionChart.nativeElement.getContext("2d");

    if (ctx) {
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.resolutionRateData.map((item) => item.date),
          datasets: [
            {
              label: "Average Resolution Time",
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
                  return `Average Resolution Time: ${context.parsed.y}`;
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              min: 1,
              max: 35,           
              suggestedMax: 35,  

              ticks: {
                stepSize: 5,
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
