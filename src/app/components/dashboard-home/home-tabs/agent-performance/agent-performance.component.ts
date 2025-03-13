import { CommonModule } from '@angular/common'
import { Component, OnInit, Type ,NO_ERRORS_SCHEMA} from '@angular/core'
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-agent-performance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agent-performance.component.html',
  styleUrl: './agent-performance.component.scss'
})
export class AgentPerformanceComponent implements OnInit {
  showOnlyMyAgent: boolean = false;

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    this.initializeUsersChart();
  }

  toggleOnlyMyAgent(): void {
    this.showOnlyMyAgent = !this.showOnlyMyAgent;
    // Here you would implement filtering logic based on the checkbox state
    // For demonstration, we'll just log the state
    console.log("Show only my agent:", this.showOnlyMyAgent);
  }

    private initializeUsersChart() {
      const ctx = document.getElementById('usersChart') as HTMLCanvasElement
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Dec1', 'Dec2', 'Dec3', 'Dec4', 'Dec5', 'Dec6','Dec7'],
          datasets: [
            {
              label: 'Product Support Agent',
              data: [3, 3.5, 2.7, 3.8, 4.1, 2.9, 3.9],
              borderColor: '#f5aa42',
              tension: 0.4,
            },
            {
              label: 'Billing Support Agent',
              data: [2.3, 2.2, 1.8, 2.4, 2.1, 2.3, 2.5],
              borderColor: '#ad6acc',
              tension: 0.4,
            },
            {
              label: 'It Support Agent',
              data: [2, 3.2, 2.3, 3.4, 3.3, 2.2, 2.6],
              borderColor: '#e34984',
              tension: 0.4,
            },
            {
              label: 'Developer Support Agent',
              data: [3.3, 3.2, 2.4, 3.6, 3.0, 2.1, 2.3],
              borderColor: '#876fed',
              tension: 0.4,
            },
            {
              label: 'Sales Support Agent',
              data: [3.2, 2.4, 2.9, 2.3, 3.2, 2.5, 2.8],
              borderColor: '#50b362',
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
