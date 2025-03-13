import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-resolution-rate',
  standalone: true,
  imports: [],
  templateUrl: './resolution-rate.component.html',
  styleUrl: './resolution-rate.component.scss'
})
export class ResolutionRateComponent implements AfterViewInit{
  @ViewChild('sessionStatusBar') sessionStatusBar!: ElementRef;
  chart!: Chart;

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  initializeChart() {
    const ctx = this.sessionStatusBar.nativeElement.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Product Support Agent',
          'IT Support Agent',
          'Billing Support Agent',
          'Developer Support Agent',
          'Developer Support Agent'
        ],
        datasets: [
          {
            label: 'Performance Score',
            data: [1.5, 2.8, 3.7, 2.6, 3.5],
            backgroundColor: '#A5B4FC',
            borderColor: 'rgba(0, 0, 255, 0.7)', // Blue border
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 5,
            ticks: {
              stepSize: 1
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true
          }
        }
      }
    });
  }
}