import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartDataset } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  template: `
    <div class="chart-container">
      <canvas #chartCanvas></canvas>
    </div>
  `,
  styles: [
    `
      .chart-container {
        flex: 1;
        padding: 16px;
        min-width: 0;
        height: 100%;
        width:580px;
      }
    `,
  ],
  standalone: true,
})
export class ChartComponent implements OnInit {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    
    const data = {
      labels: ['Dec 1', 'Dec 2', 'Dec 3', 'Dec 4', 'Dec 5', 'Dec 6'],
      datasets: this.generateDatasets(),
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
          labels: {
            font: {
              size: 14,
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: true,
            color: '#e0e0e0',
          },
        },
        y: {
          grid: {
            display: true,
            color: '#e0e0e0',
          },
        },
      },
    };

    new Chart(ctx!, {
      type: 'line',
      data,
      options,
    });
  }

  private generateDatasets(): ChartDataset<'line'>[] {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F4A261', '#2A9D8F', '#E76F51', '#264653'];
    return colors.map((color, index) => ({
      label: `Line ${index + 1}`,
      data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)), // Random data
      borderColor: color,
      backgroundColor: color,
      tension: 0.4, // Smooth curves
      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 8,
      borderWidth: 1,
      fill: false,
    }));
  }
}
