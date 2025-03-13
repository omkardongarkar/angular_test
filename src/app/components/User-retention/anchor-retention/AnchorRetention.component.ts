import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Chart, ChartConfiguration } from 'chart.js/auto'

interface TableRow {
  timeInterval: string
  users: number
  week0: string
  week1: string
  week2: string
  week3: string
  week4: string
}

@Component({
  selector: 'app-anchor-retention',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './AnchorRetention.component.html',
  styleUrls: ['./AnchorRetention.component.scss'],
})
export class AnchorRetentionComponent implements OnInit {
  constructor() {}

  activeTab = 'Overview'

  setActiveTab(tab: string) {
    this.activeTab = tab
  }
 @ViewChild('chart') private chartRef!: ElementRef
  private chart!: Chart
  data=[
    {
      label: 'Retention',
      data: [65,55,45,20],
      borderColor: '#818cf8',
      backgroundColor: 'rgba(129, 140, 248, 0.2)',
      tension: 0.4,
      fill: true,
      
    },
  ];
  labels= ['Week 0', 'Week 1', 'Week 2', 'Week 3', 'Week 4'];
  
  ngOnInit(): void {
    this.createChart(this.data,this.labels);
  }
  createChart(data:any , label:any): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    
    if (!ctx) {
      console.error("Canvas element not found!");
      return;
    }
  
    // Destroy existing chart if it exists
    if (this.chart) {
      this.chart.destroy();
      console.log("Chart Destroyed")
    }
  
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: label,
        datasets:data,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            // beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 2
            },
            grid: {
              color: 'rgba(0, 0, 26, 0.15)',
            }
          },
          x: {
            grid: {
              color: 'rgba(0, 0, 26, 0.15)',
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
  //  private createChart(): void {
  //     const ctx = this.chartRef.nativeElement.getContext('2d')
  
  //     const data = {
  //       labels: ['Week 0', 'Week 1', 'Week 2', 'Week 3', 'Week 4'],
  //       datasets: [
  //         {
  //           label: 'Retention',
  //           data: [100, 42, 37, 25, 16],
  //           borderColor: '#818cf8',
  //           backgroundColor: 'rgba(129, 140, 248, 0.2)',
  //           tension: 0.4,
  //           fill: true,
  //         },
  //       ],
  //     }
  
  //     const config: ChartConfiguration = {
  //       type: 'line',
  //       data: data,
  //       options: {
  //         responsive: true,
  //         maintainAspectRatio: false,
  //         scales: {
  //           y: {
  //             beginAtZero: true,
  //             max: 100,
  //             ticks: {
  //               callback: function (value) {
  //                 return value + '%'
  //               },
  //             },
  //           },
  //         },
  //         plugins: {
  //           legend: {
  //             display: false,
  //           },
  //           tooltip: {
  //             callbacks: {
  //               label: function (context) {
  //                 return context.parsed.y + '%'
  //               },
  //             },
  //           },
  //         },
  //       },
  //     }
  
  //     this.chart = new Chart(ctx, config)
  //   }

    tableData: TableRow[] = [
      {
        timeInterval: 'Average Retention',
        users: 76,
        week0: '100%',
        week1: '42%',
        week2: '37%',
        week3: '25%',
        week4: '16%',
      },
      {
        timeInterval: '01 Dec - 07 Dec',
        users: 13,
        week0: '100%',
        week1: '45%',
        week2: '32%',
        week3: '22%',
        week4: '16%',
      },
      {
        timeInterval: '07 Dec - 14 Dec',
        users: 27,
        week0: '100%',
        week1: '41%',
        week2: '29%',
        week3: '24%',
        week4: '-',
      },
      {
        timeInterval: '14 Dec - 21 Dec',
        users: 45,
        week0: '100%',
        week1: '50%',
        week2: '36%',
        week3: '-',
        week4: '-',
      },
      {
        timeInterval: '21 Dec - 28 Dec',
        users: 34,
        week0: '100%',
        week1: '23%',
        week2: '-',
        week3: '-',
        week4: '-',
      },
      {
        timeInterval: '29 Dec - 04 Jan',
        users: 19,
        week0: '100%',
        week1: '-',
        week2: '-',
        week3: '-',
        week4: '-',
      },
    ]
  
}
