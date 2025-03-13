import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
// import { AgentService } from "./agent.service";
import { Chart } from "chart.js";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AgentData {
  name: string;
  type: string;
  ownerName: string;
  ownerEmail: string;
  ownerImage: string;
  status: string;
  audience: string;
  riskScore: string;
}

interface Agent {
  name: string;
  count: number;
  checked: boolean;
  color: string;
  borderColor: string;
  iconUrl: string;
}

@Component({
  selector: 'app-number-of-agent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number-of-agent.component.html',
  styleUrl: './number-of-agent.component.scss'
})
export class NumberOfAgentComponent {

  @ViewChild('bubbleChart') bubbleChartRef!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  agentInventory: AgentData[] = [
    {
      name: "Product Support Agent",
      type: "Custom Developed",
      ownerName: "David Liu",
      ownerEmail: "David@chatsee.ai",
      ownerImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/43c84f3721c5a530ceb7283364f6b63ae55d736b87505adb7df18d2d512686d6?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5",
      status: "active",
      audience: "External Users",
      riskScore: "6.4/10",
    },
    {
      name: "IT Support Agent",
      type: "ZenDesk",
      ownerName: "Peter Smith",
      ownerEmail: "peter@chatsee.ai",
      ownerImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/43c84f3721c5a530ceb7283364f6b63ae55d736b87505adb7df18d2d512686d6?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5",
      status: "inactive",
      audience: "Internal Users",
      riskScore: "7.2/10",
    },
    {
      name: "Billing Support Agent",
      type: "ZenDesk",
      ownerName: "John Lee",
      ownerEmail: "John@chatsee.ai",
      ownerImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/43c84f3721c5a530ceb7283364f6b63ae55d736b87505adb7df18d2d512686d6?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5",
      status: "active",
      audience: "External Users",
      riskScore: "5.7/10",
    },
    {
      name: "Developer Support Agent",
      type: "Microsoft Copilot",
      ownerName: "Mary Peterson",
      ownerEmail: "Mary@chatsee.ai",
      ownerImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/43c84f3721c5a530ceb7283364f6b63ae55d736b87505adb7df18d2d512686d6?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5",
      status: "active",
      audience: "Internal Users",
      riskScore: "5.1/10",
    },
    {
      name: "Sales Support Agent",
      type: "Amazon Q",
      ownerName: "Obantu Okate",
      ownerEmail: "Obantu@chatsee.ai",
      ownerImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/43c84f3721c5a530ceb7283364f6b63ae55d736b87505adb7df18d2d512686d6?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5",
      status: "inactive",
      audience: "Internal Users",
      riskScore: "3.2/10",
    },
  ];


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


  data = {
    datasets: [
      {
        label: 'Product Support Agent',
        data: [{ x: 30, y: 30, r: 13 }],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hidden: false
      },
      {
        label: 'IT Support Agent',
        data: [{ x: 45, y: 65, r: 9 }],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        hidden: false
      },
      {
        label: 'Billing Support Agent',
        data: [{ x: 55, y: 40, r: 10 }],
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
        hidden: false
      },
      {
        label: 'Developer Support Agent',
        data: [{ x: 70, y: 55, r: 15 }],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hidden: false
      },
      {
        label: 'Sales Support Agent',
        data: [{ x: 90, y: 80, r: 11 }],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hidden: false
      }
    ]
  };

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy(); // Destroy existing chart if any
    }

    this.chart = new Chart(this.bubbleChartRef.nativeElement, {
      type: 'bubble',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: 'User engagement'
            }
          },
          y: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: 'Agent performance'
            }
          }
        }
      }
    });
  }

  toggleDataset(index: number) {
    this.chart.data.datasets[index].hidden = !this.chart.data.datasets[index].hidden;
    this.chart.update();
  }

}
