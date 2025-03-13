import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AnalyticsHeaderComponent } from './components/analytics-header/analytics-header.component'
import { MetricsGridComponent } from './components/metrics-grid/metrics-grid.component'
import { DataViewComponent } from './components/data-view/data-view.component'
import { TabsComponent } from '../../../user-intents/analytics/Tabs.component'
import { TopicsListComponent } from '../../../user-intents/analytics/TopicsList.component'
import { ChartComponent } from '../../../user-intents/analytics/Chart.component'
import { ScatterChartComponent } from '../../../topics/analytics-dashboard/scatter-chart/scatter-chart.component'


interface Topics {
  topics: string
  icon: string
  color: string
  users: number
  percentage: number
  selected:boolean
}

interface TableRow {
  users: { count: number; trend: number }
  retention: number
  conversations: { count: number; trend: number }
}

@Component({
  selector: 'app-analytics-insights',
  templateUrl: './user-emotions.component.html',
  styleUrls: ['./user-emotions.component.scss'],
  standalone: true,
  imports: [CommonModule, AnalyticsHeaderComponent,
     MetricsGridComponent, DataViewComponent,    
        TabsComponent,
        TopicsListComponent,
        ChartComponent,
        ScatterChartComponent],
})
export class UserEmotionsComponent implements OnInit {
  selectedTab : any;
  sortOrder: any
  data: any

  ngOnInit(): void {
    this.selectedTab = this.TabGroup.find(tab => tab.isSelect === true) || null;
    if (!this.selectedTab && this.TabGroup.length > 0) {
      this.selectedTab = this.TabGroup[0]; // Select the first tab if none is initially selected
      this.TabGroup[0].isSelect = true; // Make sure the first tab's isSelect is true
    }
    this.loadContent(this.selectedTab?.name || ''); // Load content for the selected tab

    this.data = [...this.tableData];  // Assign initial data
    this.sortOrder = {};  
}
TabGroup:any[]=[
  {
    id:1,
    name:'Table',
    icon:"https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/1dae556fa67fc65b02636bc7cd7bdeab38fb2ca89ae502e7ced7c5983c6be61e?apiKey=43632c7bd1d84079a851d9b51a08f2e5&",
    isSelect:true
  },
  {
    id:2,
    name:'Map',
    icon:"https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/63d25d265abda75ef8bddbeea5d9b9baefc60f3282720657516016d3e67e2f2e?apiKey=43632c7bd1d84079a851d9b51a08f2e5&",
    isSelect:false
  },
  {
    id:3,
    name:'Trends',
    icon:'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/63d25d265abda75ef8bddbeea5d9b9baefc60f3282720657516016d3e67e2f2e?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
    isSelect:false
  }
]

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
  

  selectTab(selectedTab: any): void {
    this.TabGroup.forEach(tab => tab.isSelect = false);

    selectedTab.isSelect = true; 
    this.selectedTab = selectedTab;
    console.log("Selected tab is :",this.selectedTab.name);

  }

  loadContent(tabName: string) {
    // Implement your logic here to load content based on the selected tab.
    console.log("Loading content for:", tabName);
    // Example: You might use *ngIf to show/hide components.
    // Or you might fetch data from a service based on the tabName.
  }
}
