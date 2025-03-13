import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-business-insights',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class BusinessInsightsComponent implements OnInit {
  isClicked:boolean =false;
  showAnalysis: boolean = false;
  isClicked1: boolean =false;
  isClicked2: boolean =false;
  isClicked3: boolean =false;

  constructor() {}

  ngOnInit(): void {
    this.initializeChart();   
    this.initializeUsersChart();
    
  }
  toggleAnalysis() {
    // debugger;
    console.log("In toggleAnalysis");
    // Change the span color to cyan when clicked
    
    setTimeout(() => {
      this.isClicked1 = !this.isClicked1;
    }, 200); // Reset the color after 5 seconds
  }

  toggleAnalysis2() {
    
    setTimeout(() => {
      this.isClicked2 = !this.isClicked2;
    }, 200); // Reset the color after 5 seconds
  }

  toggleAnalysis3() {    
    setTimeout(() => {
      this.isClicked3= !this.isClicked3;
    }, 200); // Reset the color after 5 seconds
  }
  private initializeChart(): void {
    // Chart initialization logic here
    // Using chart library of choice (e.g. Chart.js, D3)
  }

    initializeUsersChart() {
      const ctx = document.getElementById('usersChart') as HTMLCanvasElement
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Active Users',
              data: [4000, 3500, 4200, 3800, 4100, 3900, 4324],
              borderColor: '#4F46E5',
              tension: 0.4,
            },
            {
              label: 'New Users',
              data: [2000, 2200, 1800, 2400, 2100, 2300, 2500],
              borderColor: '#22C55E',
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        },
      })
    }
}