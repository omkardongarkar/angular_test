import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

interface TableRow {
  users: { count: number; trend: number }
  retention: number
  conversations: { count: number; trend: number }
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DataTableComponent implements OnInit{
  ngOnInit(): void {
    this.data = [...this.tableData];  // Assign initial data
  this.sortOrder = {};  
  }
  tableData: TableRow[] = [
    { users: { count: 47, trend: 23 }, retention: 23, conversations: { count: 47, trend: 12 } },
    { users: { count: 12, trend: 20 }, retention: 30, conversations: { count: 19, trend: 15 } },
    { users: { count: 56, trend: 15 }, retention: 25, conversations: { count: 52, trend: 10 } },
    { users: { count: 73, trend: 28 }, retention: 27, conversations: { count: 15, trend: 13 } },
    { users: { count: 18, trend: 22 }, retention: 20, conversations: { count: 41, trend: 12 } },
    { users: { count: 65, trend: 25 }, retention: 23, conversations: { count: 38, trend: 18 } },
    { users: { count: 29, trend: 17 }, retention: 26, conversations: { count: 60, trend: 14 } },
    { users: { count: 84, trend: 21 }, retention: 22, conversations: { count: 25, trend: 16 } },
    { users: { count: 91, trend: 24 }, retention: 24, conversations: { count: 44, trend: 11 } },
    
  ]
  sortOrder: any;
  data: any;
  sortData(column: string) {
    if (!this.sortOrder) this.sortOrder = {}; // Safety check
  
    this.sortOrder[column] = this.sortOrder[column] === 'asc' ? 'desc' : 'asc';
    console.log("In sorting function");
    this.data.sort((a: any, b: any) => {
      let valueA, valueB;
  
      // Handle nested objects like 'users' and 'conversations'
      if (column === 'users' || column === 'conversations') {
        valueA = a[column]?.count ?? 0;
        valueB = b[column]?.count ?? 0;
      } else {
        valueA = a[column] ?? 0; // For 'retention'
        valueB = b[column] ?? 0;
      }
  
      return this.sortOrder[column] === 'asc' ? valueA - valueB : valueB - valueA;
    });
  }
  exportCsv(): void {
    // Implementation for CSV export
  }
}
