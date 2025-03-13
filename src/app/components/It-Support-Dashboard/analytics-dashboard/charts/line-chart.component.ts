import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  template: `<canvas #chartCanvas></canvas>`,
  standalone: true,
})
export class LineChartComponent implements OnInit {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  ngOnInit() {
    this.createChart();
  }

  private createChart() {
    const canvas = this.chartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Failed to get 2D context from canvas');
      return;
    }

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Active Users',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
          {
            label: 'New Users',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }
}
