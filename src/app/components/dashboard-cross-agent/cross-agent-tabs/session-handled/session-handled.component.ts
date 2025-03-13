import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";

import { Chart, ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";


interface SessionDay {
  date: string;
  completed: number;
  incomplete: number;
  abandoned: number;
}

@Component({
  selector: 'app-session-handled',
  standalone: true,
  imports: [],
  templateUrl: './session-handled.component.html',
  styleUrl: './session-handled.component.scss'
})
export class SessionHandledComponent implements AfterViewInit{
  @ViewChild('sessionsMonthChart') sessionsMonthChart!: ElementRef;
  @ViewChild('sessionStatusstackedBarChart') sessionStatusstackedBarChart!: ElementRef;
  @ViewChild('agentChart') agentChart!: ElementRef;

  sessionData: SessionDay[] = [
    { date: "24 Nov", completed: 975, incomplete: 469, abandoned: 373 },
    { date: "25 Nov", completed: 996, incomplete: 674, abandoned: 426 },
    { date: "26 Nov", completed: 1039, incomplete: 609, abandoned: 459 },
    { date: "27 Nov", completed: 1071, incomplete: 598, abandoned: 297 },
    { date: "28 Nov", completed: 975, incomplete: 588, abandoned: 351 },
    { date: "29 Nov", completed: 770, incomplete: 491, abandoned: 330 },
    { date: "30 Nov", completed: 889, incomplete: 706, abandoned: 426 },
    { date: "31 Nov", completed: 889, incomplete: 555, abandoned: 362 },
    { date: "1 Dec", completed: 975, incomplete: 426, abandoned: 523 },
    { date: "2 Dec", completed: 1050, incomplete: 598, abandoned: 405 },
    { date: "3 Dec", completed: 921, incomplete: 502, abandoned: 308 },
  ];
  chart: any;

  ngAfterViewInit(): void {
    this.initializesessionsMonthChart();
    this.initializeAgentChart();
    this.createSessionStatusstackedBarChart();
  }

  initializesessionsMonthChart() {
    new Chart(this.sessionsMonthChart.nativeElement, {
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

  createSessionStatusstackedBarChart(): void {
    const ctx = this.sessionStatusstackedBarChart.nativeElement.getContext('2d');
    
    new Chart(this.sessionStatusstackedBarChart.nativeElement, {
      type: 'bar' as ChartType,
      data: {
        labels: ['Nov24', 'Nov25', 'Nov26', 'Nov27', 'Nov28', 'Nov29', 'Nov30', 'Dec1', 'Dec2'],
        datasets: [
          {
            label: 'Complete',
            data: [975, 996, 1039, 1071, 975, 770, 889, 889, 975],
            backgroundColor: '#A5B4FC',
            borderColor: '#A5B4FC',
            borderWidth: 1
          },
          {
            label: 'Incomplete/Abandoned',
            data: [469, 674, 609, 598, 588, 491, 706, 555, 426],
            backgroundColor: '#FECACA',
            borderColor: '#FECACA',
            borderWidth: 1
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        },
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true,
            beginAtZero: true
          }
        }
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