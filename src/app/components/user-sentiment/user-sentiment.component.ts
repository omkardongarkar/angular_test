import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FormsModule } from '@angular/forms'
import { ScatterChartComponent } from '../topics/analytics-dashboard/scatter-chart/scatter-chart.component'
import { ChartComponent } from '../topics/analytics-dashboard/Chart.component'
import { TabsComponent } from '../user-intents/analytics/Tabs.component'
import { TopicsListComponent } from '../user-intents/analytics/TopicsList.component'
import { HeaderComponent } from '../user-intents/analytics/Header.component'
import { MetricsComponent } from '../user-intents/analytics/Metrics.component'
// import { ScatterChartComponent } from '../../topics/analytics-dashboard/scatter-chart/scatter-chart.component'

interface EmotionInsight {
  emotion: string
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
  selector: 'app-analytics-dashboard',
  templateUrl: './user-sentiment.component.html',
  styleUrls: ['./user-sentiment.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
       FormsModule,
       CommonModule,
       HeaderComponent,
       MetricsComponent,
       TabsComponent,
       TopicsListComponent,
       ChartComponent,
      //  ScatterChartComponent,
       ScatterChartComponent
  ],
})
export class UserSentimentComponent implements OnInit {
  activeView: 'table' | 'map' | 'trends' = 'table'
 
  selectedTab : any;
  sortOrder: any
  data: any

  setActiveView(view: 'table' | 'map' | 'trends'): void {
    this.activeView = view
  }
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
  emotions: EmotionInsight[] = [
    {
      emotion: 'Neutral',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/80285fef91c6495b1a649ed2091196ebe62ad4da56fdcf64616eba22c6b505df?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#4f46e5',
      percentage: 32,
      users: 24,
      selected : true
    },
    {
      emotion: 'Positive',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/17324cc06cc3255ff75cba93aabec7dbad92ff915b30a136f95bd8841a855ae7?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#9333ea',
      percentage: 27,
      users: 12,
      selected : true

    },
    {
      emotion: 'Negative',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/a418240f0e19660ab580d5236c870aabb797b151ac9983af5326c0c501612226?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#ea580c',
      percentage: 14,
      users: 9,

      selected : true

    },
    {
      emotion: 'Mixed',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/e026b0fc61b50bf0a2983c17e8d0453003fd9c9e80f4cf319281934dcae3c54a?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#16a34a',
      percentage: 22,
      users: 7,
      selected : true

    },
    {
      emotion: 'Very Positive',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/a2c6a703430fd8a289fbaf660521b20d3daeb3db30c2cf02a53f4b511759591e?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#dc2626',
      percentage: 9,
      users: 14,
      selected : true

    },
    {
      emotion: 'Very Negative',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/300f355d501b094ce892883cb05e77454d6ce3b4ec1da92ca8424e8a9eb10f9f?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#0891b2',
      percentage: 31,
      users: 5,
      selected : true

    },
    
  ]
  selectedCount = this.emotions.length;

  countSelected() {
    this.selectedCount = this.emotions.filter(emotion => emotion.selected).length;
  }
  clearFilters(): void {
    this.emotions.forEach(emotion => emotion.selected = false);  // Uncheck all checkboxes
    this.countSelected();  // Update the selected count
  }
  
  tableData: TableRow[] = [
    { users: { count: 47, trend: 23 }, retention: 23, conversations: { count: 47, trend: 12 } },
    { users: { count: 12, trend: 20 }, retention: 30, conversations: { count: 19, trend: 15 } },
    { users: { count: 56, trend: 15 }, retention: 25, conversations: { count: 52, trend: 10 } },
    { users: { count: 73, trend: 28 }, retention: 27, conversations: { count: 15, trend: 13 } },
    { users: { count: 18, trend: 22 }, retention: 20, conversations: { count: 41, trend: 12 } },
    { users: { count: 65, trend: 25 }, retention: 23, conversations: { count: 38, trend: 18 } },
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
