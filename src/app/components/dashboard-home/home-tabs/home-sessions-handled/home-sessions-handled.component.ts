import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-home-sessions-handled',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-sessions-handled.component.html',
  styleUrl: './home-sessions-handled.component.scss' 
})

export class HomeSessionsHandledComponent implements AfterViewInit {
  
  @ViewChild('sessionsChart') sessionsChart!: ElementRef;
  @ViewChild('sessionPieChart') sessionPieChart!: ElementRef;

  ngAfterViewInit() {
    this.createChart();
    this.createPieChart();
  }

  createChart() {
    new Chart(this.sessionsChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['24 Nov', '25 Nov', '26 Nov', '27 Nov', '28 Nov', '29 Nov', '30 Nov', '31 Nov', '1 Dec', '2 Dec'],
        datasets: [
          {
            label: 'Completed',
            data: [975, 998, 1039, 1071, 975, 770, 889, 889, 975, 1050],
            backgroundColor: 'rgba(102, 102, 255, 0.5)',
            borderColor: 'rgba(102, 102, 255, 1)',
            borderWidth: 1
          },
          {
            label: 'Incomplete',
            data: [469, 674, 609, 508, 589, 491, 706, 555, 426, 598],
            backgroundColor: 'rgba(255, 102, 102, 0.5)',
            borderColor: 'rgba(255, 102, 102, 1)',
            borderWidth: 1
          },
          {
            label: 'Abandoned',
            data: [373, 426, 459, 297, 351, 330, 428, 362, 523, 405],
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              stepSize: 550 // Step size of 550
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

  createPieChart() {
    new Chart(this.sessionPieChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Completed', 'Abandoned', 'Incomplete'],
        datasets: [
          {
            data: [42.4, 35.3, 22.3], // Percentages
            backgroundColor: [
              'rgba(0, 200, 0, 0.5)', // Green for Completed
              'rgba(255, 50, 50, 0.5)', // Red for Abandoned
              'rgba(255, 165, 0, 0.5)' // Orange for Incomplete
            ],
            borderColor: [
              'rgba(0, 200, 0, 1)',
              'rgba(255, 50, 50, 1)',
              'rgba(255, 165, 0, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right'
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                return `${tooltipItem.label}: ${tooltipItem.raw}%`;
              }
            }
          }
        }
      }
    });
  }
}