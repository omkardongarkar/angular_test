import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChartModule } from 'primeng/chart'
import { ErrorGaugeComponent } from './error-gauge/error-gauge.component'
import { MetricsCardComponent } from './metrics-card/metrics-card.component'
import { TabNavComponent } from './tab-nav/tab-nav.component'
import { Chart } from 'chart.js'
enum TrendDirection { Up = 'up', Down = 'down', Neutral = 'neutral' }

interface Metric {
  title: string;
  value: string;
  trend: string;
  trendDirection: TrendDirection;
  highlight?: boolean;
}

@Component({
  selector: 'app-error-interaction',
  templateUrl: './error-rate.component.html',
  styleUrls: ['./error-rate.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ChartModule,
    ErrorGaugeComponent,
    MetricsCardComponent,
    TabNavComponent,
  ],
})
export class ErrorRateComponent implements OnInit {
  chartData = {
    labels: ['Inability to perform actions', 'Lack of domain info', 'Query misunderstanding'],
    datasets: [
      {
        data: [45, 35, 5],
        backgroundColor: ['rgba(254, 202, 202, 1)'],
        borderColor: ['rgba(220, 38, 38, 1)'],
        borderWidth: 1,
      },
    ],
  }

  chartOptions = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 50,
        ticks: { stepSize: 5 },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  }

  metrics:Metric[]  = [
    {
      title: 'Main Issues',
      value: '3',
      trend: '0',
      trendDirection: TrendDirection.Up,
    },
    {
      title: 'Error Rate',
      value: '4.5%',
      trend: '-32%',
      trendDirection: TrendDirection.Down,
    },
    {
      title: 'Users Impacted',
      value: '32',
      trend: '32%',
      trendDirection:TrendDirection.Down,
    },
    {
      title: 'Total Users',
      value: '13%',
      trend: '73%',
      trendDirection:TrendDirection.Down,
    },
  ]
  errorChartData=[
    {
      label: 'Dashed Line',
      data: [3,13,12,11],
      borderColor: '#F87171',
      borderDash: [6, 6],
      pointBackgroundColor: 'white',
      pointBorderColor: '#F87171',
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false,
      tension:0.4,
      borderWidth: 2 
    },
    {
      label: 'Solid Line',
      data: [11,6,13,3],
      borderColor: '#F87171',
      pointBackgroundColor: 'white',
      pointBorderColor: '#F87171',
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false,
      tension:0.4,
      borderWidth: 2 
    }
  ];

  UserImpaceData=[
    {
      label: 'Dashed Line',
      data: [7.5 , 7.25 , 4.5 , 8.5],
      borderColor: '#F87171',
      borderDash: [6, 6],
      pointBackgroundColor: 'white',
      pointBorderColor: '#F87171',
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false,
      tension:0.4,
      borderWidth: 2 
    },
    {
      label: 'Solid Line',
      data: [2.25 , 3.75 , 9 , 2],
      borderColor: '#F87171',
      pointBackgroundColor: 'white',
      pointBorderColor: '#F87171',
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false,
      tension:0.4,
      borderWidth: 2 
    }
  ];
  TotalUsersData=[
    {
      label: 'Dashed Line',
      data: [2,3.60,3.30,3.15],
      borderColor: '#F87171',
      borderDash: [6, 6],
      pointBackgroundColor: 'white',
      pointBorderColor: '#F87171',
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false,
      tension:0.4,
      borderWidth: 2 
    },
    {
      label: 'Solid Line',
      data: [5.95 , 4.50,7.10,5.45],
      borderColor: '#F87171',
      pointBackgroundColor: 'white',
      pointBorderColor: '#F87171',
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false,
      tension:0.4,
      borderWidth: 2 
    }
  ];
  totalUsersLabel = [1,2,3,4];
  errorRateLabel=['Nov 24', 'Nov 25', 'Nov 26', 'Nov 27'];
  UserImpaceLabel=[1,2,3,4];

  errorRate = {
    value: 14.5,
    status: 'moderate',
  }
  chart: any
  selectedMetric= this.metrics[0].title; // To track the selected metric

  ngOnInit() {
    // this.createChart();
  }

  getStatus(status: string): 'optimal' | 'moderate' | 'critical' {
    const validStatuses: ('optimal' | 'moderate' | 'critical')[] = ['optimal', 'moderate', 'critical'];
    return validStatuses.includes(status as any) ? (status as 'optimal' | 'moderate' | 'critical') : 'optimal';
  }
  getTrendDirection(trend: string): 'up' | 'down' | 'neutral' {
    const validTrends: ('up' | 'down' | 'neutral')[] = ['up', 'down', 'neutral'];
    return validTrends.includes(trend as any) ? (trend as 'up' | 'down' | 'neutral') : 'neutral';
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
            beginAtZero: true,
            // max: 20,
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
  
  onMetricCardClick(metricTitle: string) {
    this.selectedMetric = metricTitle;
    console.log("Clicked Metric:", metricTitle);
  
    setTimeout(() => {
      const canvas = document.getElementById('myChart') as HTMLCanvasElement;
      
      if (!canvas) {
        console.error("Canvas element not found! Retrying in 300ms...");
        setTimeout(() => { // Retry after another delay
          const retryCanvas = document.getElementById('myChart') as HTMLCanvasElement;
          if (retryCanvas) {
            console.log("Canvas found after retry:", retryCanvas);
            this.createChartForMetric(metricTitle);
          } else {
            console.error("Canvas still not found!");
          }
        }, 300);
        return;
      }
  
      this.createChartForMetric(metricTitle);
    }, 300); // Initial delay for DOM update
  }
  
  createChartForMetric(metricTitle: string) {
    if (metricTitle === 'Error Rate') {
      this.createChart(this.errorChartData, this.errorRateLabel);
    } else if (metricTitle === 'Users Impacted') {
      this.createChart(this.UserImpaceData, this.UserImpaceLabel);
    }else if(metricTitle === 'Total Users'){
      this.createChart(this.TotalUsersData,this.totalUsersLabel);
    }
  }
  
}
