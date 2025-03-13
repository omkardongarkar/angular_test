import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-top-issues',
  standalone: true,
  imports: [
    CommonModule,
   FormsModule
  ],
  templateUrl: './top-issues.component.html',
  styleUrl: './top-issues.component.scss'
})
export class TopIssuesComponent implements  AfterViewInit{  
  @ViewChild('supportTicketsChart') supportTicketsChart!: ElementRef;

  Query : any = [
    {
      "name": "Delayed refunds",
      "agent": "Product Support Agent",
      "resolutionRate": "65.4%"
    },
    {
      "name": "Delivery delays",
      "agent": "Product Support Agent",
      "resolutionRate": "74.6%"
    },
    {
      "name": "Software installation failures",
      "agent": "IT Support Agent",
      "resolutionRate": "58.9%"
    },
    {
      "name": "VPN connection issues",
      "agent": "IT Support Agent",
      "resolutionRate": "72.1%"
    },
    {
      "name": "Payment processing errors",
      "agent": "Billing Support Agent",
      "resolutionRate": "68.2%"
    },
    {
      "name": "Password reset not working",
      "agent": "IT Support Agent",
      "resolutionRate": "53.7%"
    },
    {
      "name": "Warranty claims denied",
      "agent": "Product Support Agent",
      "resolutionRate": "77.5%"
    }
  ]
  

  // chARTS  
  ngAfterViewInit(): void {
    this.initializeSupportTicketsChart();
  }

  initializeSupportTicketsChart() {
    new Chart(this.supportTicketsChart.nativeElement, {
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

}
