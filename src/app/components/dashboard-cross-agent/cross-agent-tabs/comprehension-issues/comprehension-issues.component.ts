import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Chart, ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-comprehension-issues',
  standalone: true,
  imports: [],
  templateUrl: './comprehension-issues.component.html',
  styleUrl: './comprehension-issues.component.scss'
})
export class ComprehensionIssuesComponent implements AfterViewInit {

  @ViewChild('comprehensionIssuesChart') comprehensionIssuesChart!: ElementRef;

  ngAfterViewInit() {
    this.initializecomprehensionIssuesChart();
  }

  private initializecomprehensionIssuesChart() {
    new Chart(this.comprehensionIssuesChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Product Support Agent',
            data: [3, 35, 27, 38, 21, 29, 3.9],
            borderColor: '#f5aa42',
            tension: 0.4
          },
          {
            label: 'IT Support Agent',
            data: [2, 32, 23,34, 33, 22, 2.6],
            borderColor: '#e34984',
            tension: 0.4
          },
          {
            label: 'Billing Support Agent',
            data: [23, 2.2, 8, 24, 21, 2.3, 25],
            borderColor: '#ad6acc',
            tension: 0.4
          },
          {
            label: 'Developer Support Agent',
            data: [33, 32, 24, 36, 30, 21, 22],
            borderColor: '#876fed',
            tension: 0.4
          },
          {
            label: 'Sales Support Agent',
            data: [32, 24, 29, 23, 32, 25, 28],
            borderColor: '#50b362',
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 25 // Y-axis step size set to 25
            }
          }
        },
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}