import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

interface TableRow {
  id: number
  users: number
  userGrowth: number
  retention: number
  conversations: number
  conversionRate: number
}

@Component({
  selector: 'app-analytics-table',
  templateUrl: './analytics-table.component.html',
  styleUrls: ['./analytics-table.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class AnalyticsTableComponent implements OnInit {
  tableData: TableRow[] = [
    { id: 1, users: 47, userGrowth: 23, retention: 23, conversations: 47, conversionRate: 12 },
    { id: 2, users: 12, userGrowth: 20, retention: 30, conversations: 19, conversionRate: 15 },
    { id: 3, users: 56, userGrowth: 15, retention: 25, conversations: 52, conversionRate: 10 },
    { id: 4, users: 73, userGrowth: 28, retention: 27, conversations: 15, conversionRate: 13 },
    { id: 5, users: 18, userGrowth: 22, retention: 20, conversations: 41, conversionRate: 12 },
    { id: 6, users: 65, userGrowth: 25, retention: 23, conversations: 38, conversionRate: 18 },
    { id: 7, users: 29, userGrowth: 17, retention: 26, conversations: 60, conversionRate: 14 },
    { id: 8, users: 84, userGrowth: 21, retention: 22, conversations: 25, conversionRate: 16 },
    { id: 9, users: 38, userGrowth: 26, retention: 21, conversations: 12, conversionRate: 17 },
    { id: 10, users: 77, userGrowth: 19, retention: 29, conversations: 29, conversionRate: 13 },
  ]

  ngOnInit(): void {}
}
