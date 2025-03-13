import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-user-analytics',
  templateUrl: './UserAnalytics.component.html',
  styleUrls: ['./UserAnalytics.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class UserAnalyticsComponent implements OnInit {
  dateRange: string = 'Jul 1st - Sep 30'
  users: string[] = Array(12).fill('01f8a6ea-42d6-42ae-9336-6c9220ff9deb')
  interactions: number[] = Array(12).fill(47)
  costs: number[] = Array(12).fill(0)

  constructor() {}

  ngOnInit(): void {
    console.log(this.users);
    console.log(this.interactions);
  }

  exportCsv(): void {
    // Implement CSV export logic
  }

  viewDetails(): void {
    // Implement view details logic
  }
}
