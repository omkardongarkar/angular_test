import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ChartType, GoogleChartsModule } from "angular-google-charts";
import { Chart } from "chart.js";
import * as d3 from 'd3';
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson';
import { feature } from 'topojson-client';

@Component({
  selector: 'app-home-daily-users',
  standalone: true,
  imports: [CommonModule, GoogleChartsModule],
  templateUrl: './home-daily-users.component.html',
  styleUrl: './home-daily-users.component.scss'
})
export class HomeDailyUsersComponent implements AfterViewInit {
  @ViewChild('usersLineChart') usersLineChart!: ElementRef;
  @ViewChild('devicePieChart') devicePieChart!: ElementRef;

  type = ChartType.GeoChart;

  data = [
    ['United States', 100],
    ['India', 80],
    ['Germany', 60],
    ['France', 40],
    ['Brazil', 20],
    ['Canada', 70],
    ['Russia', 50],
    ['China', 90],
    ['Australia', 30],
    ['South Africa', 10]
  ];

  options = {
    colorAxis: { colors: ['#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'] },
    datalessRegionColor: '#f5f5f5',
    defaultColor: '#f5f5f5',
    backgroundColor: '#ffffff', // White background
  };

  ngAfterViewInit(): void {
    this.createLineChart();
    this.createPieChart2();
  }


  createLineChart() {
    new Chart(this.usersLineChart.nativeElement, {
      type: 'line',
      data: {
        labels: [
          "24 Nov", "25 Nov", "26 Nov", "27 Nov", "28 Nov",
          "29 Nov", "30 Nov", "31 Nov", "1 Dec", "2 Dec", "3 Dec"
        ],
        datasets: [
          {
            label: "Active Users",
            data: [180, 200, 220, 250, 270, 290, 310, 330, 350, 370, 400],
            borderColor: "rgba(0, 200, 255, 1)",
            backgroundColor: "rgba(0, 200, 255, 0.2)",
            fill: true,
            pointBorderColor: "rgba(0, 200, 255, 1)",
            pointBackgroundColor: "white",
            pointRadius: 4
          },
          {
            label: "New Users",
            data: [90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 200],
            borderColor: "rgba(150, 100, 255, 1)",
            backgroundColor: "rgba(150, 100, 255, 0.2)",
            fill: true,
            pointBorderColor: "rgba(150, 100, 255, 1)",
            pointBackgroundColor: "white",
            pointRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom"
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 100 // Ensure y-axis values are multiples of 100
            }
          }
        }
      }
    });
  }

  createPieChart2() {
    new Chart(this.devicePieChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ["Mobile", "Desktop", "Tablet"],
        datasets: [
          {
            data: [3000, 2000, 800],
            backgroundColor: [
              "rgba(0, 200, 0, 0.3)",  // Green for Mobile
              "rgba(0, 0, 255, 0.3)",  // Blue for Desktop
              "rgba(255, 165, 0, 0.3)" // Orange for Tablet
            ],
            // borderColor: [
            //   "rgba(0, 200, 0, 1)",
            //   "rgba(0, 0, 255, 1)",
            //   "rgba(255, 165, 0, 1)"
            // ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        // plugins: {
        //   legend: {
        //     position: "right"
        //   }
        // }
      }
    });
  }
}  