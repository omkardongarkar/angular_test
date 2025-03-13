import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-knowledge-gap-issues',
  standalone: true,
  imports: [],
  templateUrl: './knowledge-gap-issues.component.html',
  styleUrl: './knowledge-gap-issues.component.scss'
})
export class KnowledgeGapIssuesComponent implements AfterViewInit {

  @ViewChild('knowledgeGapChart') knowledgeGapChart!: ElementRef;

  ngAfterViewInit() {
    this.initializeKnowledgeGapChart();
  }

  private initializeKnowledgeGapChart() {
    new Chart(this.knowledgeGapChart.nativeElement, {
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