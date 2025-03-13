import { Component, OnInit } from '@angular/core'
import { Chart } from 'chart.js/auto'

@Component({
  selector: 'app-pie-chart',
  template: `<canvas #chart></canvas>`,
  standalone: true,
})
export class PieChartComponent implements OnInit {
  chart!: Chart;

  ngOnInit() {
    this.createChart()
  }

  private createChart() {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d'); // Ensure ctx is declared here
      if (ctx) {
        this.chart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Desktop', 'Mobile', 'Tablet'],
            datasets: [
              {
                data: [300, 150, 100],
                backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      } else {
        console.error('Failed to get 2D context for canvas.');
      }
    } else {
      console.error('Canvas element not found.');
    }
  }
  
}
