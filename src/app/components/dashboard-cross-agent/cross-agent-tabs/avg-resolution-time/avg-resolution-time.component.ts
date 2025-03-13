import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartOptions, ChartType } from 'chart.js';

interface Agent {
  name: string;
  count: number;
  checked: boolean;
  color: string;
  borderColor: string;
  iconUrl: string;
}

@Component({
  selector: 'app-avg-resolution-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avg-resolution-time.component.html',
  styleUrl: './avg-resolution-time.component.scss'
})


export class AvgResolutionTimeComponent implements AfterViewInit {

  @ViewChild('resolutionChart') resolutionChart!: ElementRef;
  chart!: Chart;

  ngAfterViewInit() {
    this.initializeResolutionChart();
  }

  initializeResolutionChart(): void {
    this.chart = new Chart(this.resolutionChart.nativeElement, {
      type: 'line' as ChartType,
      data: {
        labels: ['Dec 1', 'Dec 2', 'Dec 3', 'Dec 4', 'Dec 5', 'Dec 6', 'Dec 7'],
        datasets: this.getFilteredDatasets(),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10
            },
            title: {
              display: true,
              text: 'Unit in sec' // Y-axis label
            }
          }
        },
        plugins: {
          legend: {
            display: false // Hide legend
          }
        }
      }      
    });
  }
  agents: Agent[] = [
    {
      name: "Product Support Agent",
      count: 32,
      checked: true,
      color: "rgba(199, 210, 254, 1)",
      borderColor: "rgba(79, 70, 229, 1)",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/762eae39bc820fd13d8ea30fc2b01324ab364970f2bb233ac94c341a95920879?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5",
    },
    {
      name: "IT Support Agent",
      count: 27,
      checked: true,
      color: "rgba(233, 213, 255, 1)",
      borderColor: "rgba(147, 51, 234, 1)",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9739df34f671ea26c4e6e0877b451da97db568650a559b1b110860b2cf3ac798?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5",
    },
    {
      name: "Sales Support Agent",
      count: 14,
      checked: true,
      color: "rgba(254, 215, 170, 1)",
      borderColor: "rgba(234, 88, 12, 1)",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cdccaefe72f815320bb7951c2580488574b3195c775ce132294b1916789f5e30?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5",
    },
    {
      name: "Billing Support Agent",
      count: 22,
      checked: true,
      color: "rgba(220, 252, 231, 1)",
      borderColor: "rgba(22, 163, 74, 1)",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c6946f86a576591f57ca0f6199035327e05437ffbe9fa950538fd0c44f7995dd?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5",
    },
    {
      name: "Developer Support Agent",
      count: 27,
      checked: true,
      color: "rgba(165, 243, 252, 1)",
      borderColor: "rgba(8, 145, 178, 1)",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/772e78d843a1cee6008ba7efb8b4f9c05633e714ee6eb6f5f25ea32dc316c15c?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5",
    },
  ];

  getFilteredDatasets() {
    return this.agents
      .filter((agent) => agent.checked) // Filter based on checkmark
      .map((agent) => ({
        label: agent.name,
        data: this.getDataForAgent(agent.name),
        borderColor: agent.borderColor,
        tension: 0.4
      }));
  }

  getDataForAgent(agentName: string): number[] {
    const dataMap: { [key: string]: number[] } = {
      'Product Support Agent': [3],
      'IT Support Agent': [2],
      'Billing Support Agent': [23],
      'Developer Support Agent': [22],
      'Sales Support Agent': [28]
    };
    return dataMap[agentName] || [];
  }

  toggleAgent(index: number): void {
    this.agents[index].checked = !this.agents[index].checked;
    this.chart.data.datasets = this.getFilteredDatasets(); // Update datasets
    this.chart.update(); // Refresh chart
  }

}