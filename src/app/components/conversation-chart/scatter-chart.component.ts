import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-scatter-chart',
  template: `
    <div class="chart-container">
      <canvas #chart></canvas>
    </div>
  `,
  styles: [
    `
      .chart-container {
        width: 100%;
        height: 400px;
        position: relative;
      }
      canvas {
        display: block;
      }
    `,
  ],
  standalone: true,
})
export class ScatterChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx!, {
      type: 'bubble',
      data: {
        datasets: [
          {
            label: 'Satisfied',
            data: Array.from({ length: 10 }, () => ({
              x: Math.random() * 100,
              y: Math.random() * 100,
              r: Math.random() * 15 + 10, 
            })),
            backgroundColor: 'rgba(79, 70, 229, 0.6)',
          },
          {
            label: 'Unsatisfied',
            data: Array.from({ length: 10 }, () => ({
              x: Math.random() * 100,
              y: Math.random() * 100,
              r: Math.random() * 15 + 10, 
            })),
            backgroundColor: 'rgba(229, 70, 70, 0.6)',
          },
          {
            label: 'Dropped',
            data: Array.from({ length: 10 }, () => ({
              x: Math.random() * 100,
              y: Math.random() * 100,
              r: Math.random() * 15 + 10, 
            })),
            backgroundColor: 'rgba(229, 165, 70, 0.6)',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Topic Frequency',
            },
            grid: {
              color: '#e0e0e0',
            },
          },
          y: {
            title: {
              display: true,
              text: 'User Engagement',
            },
            grid: {
              color: '#e0e0e0',
            },
          },
        },
      },
    });
  }
}
