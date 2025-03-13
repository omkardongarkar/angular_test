import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto'
@Component({
  selector: 'app-daily-users',
  standalone: true,
  imports: [],
  templateUrl: './daily-users.component.html',
  styleUrl: './daily-users.component.scss'
})
export class DailyUsersComponent implements AfterViewInit {

  @ViewChild('userChart') userChart!: ElementRef;
  @ViewChild('platformChart') platformChart!: ElementRef;
  @ViewChild('agentChart') agentChart!: ElementRef;

  ngAfterViewInit(): void {
    this.initializeUserChart();
    this.initializePlatformChart();
    this.initializeAgentChart();
  }

  initializeUserChart() {
    new Chart(this.userChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Product Support Agent',
            data: [300, 375, 297, 398, 261, 259, 359],
            borderColor: '#f5aa42',
            tension: 0.4
          },
          {
            label: 'IT Support Agent',
            data: [1442, 352, 233,344, 1343, 222, 1256],
            borderColor: '#e34984',
            tension: 0.4
          },
          {
            label: 'Billing Support Agent',
            data: [23, 257, 1568, 1224, 217, 563, 25],
            borderColor: '#ad6acc',
            tension: 0.4
          },
          {
            label: 'Developer Support Agent',
            data: [733, 320, 240, 1136, 300, 210, 220],
            borderColor: '#876fed',
            tension: 0.4
          },
          {
            label: 'Sales Support Agent',
            data: [320, 240, 29, 1123, 320, 225, 1280],
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
              stepSize: 350 // Y-axis step size set to 25
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

  initializePlatformChart() {
    new Chart(this.platformChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [
          {
            data: [45, 35, 20],
            backgroundColor: ['#A5B4FC', '#BBF7D0', '#FED7AA']
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  initializeAgentChart() {
    new Chart(this.agentChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['It Support', 'Sales Support', 'Developer Support', 'Product Support', 'Billing Support'],
        datasets: [
          {
            data: [10.84, 10.46, 24.10, 29.92, 21.69],
            backgroundColor: ['#FED7AA', '#D8B4FE', '#A5B4FC', '#BBF7D0', '#FECACA']
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
