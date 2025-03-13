import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component'
import { FormsModule } from '@angular/forms'
import { ChartComponent } from './Chart.component'

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
  selector: 'app-analytics-dashboard',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
  standalone: true,
  imports: [CommonModule, ScatterChartComponent,FormsModule,ChartComponent],
})
export class TopicsComponent implements OnInit {
  data: any

  // TabGroup:any[]=[
  //   {
  //     id:1,
  //     name:'Table',
  //     icon:"https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/1dae556fa67fc65b02636bc7cd7bdeab38fb2ca89ae502e7ced7c5983c6be61e?apiKey=43632c7bd1d84079a851d9b51a08f2e5&",
  //     isSelect:false
  //   },
  //   {
  //     id:2,
  //     name:'Map',
  //     icon:"https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/1dae556fa67fc65b02636bc7cd7bdeab38fb2ca89ae502e7ced7c5983c6be61e?apiKey=43632c7bd1d84079a851d9b51a08f2e5&",
  //     isSelect:true
  //   },
  //   {
  //     id:2,
  //     name:'Trends',
  //     icon:'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/63d25d265abda75ef8bddbeea5d9b9baefc60f3282720657516016d3e67e2f2e?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
  //     isSelect:false
  //   }
  // ];
  constructor() {}
  selectedTab : any;
  sortOrder: any

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
  ];
  topics: Topics[] = [
    {
      topics: 'Sales And Strategy',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/80285fef91c6495b1a649ed2091196ebe62ad4da56fdcf64616eba22c6b505df?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#4f46e5',
      percentage: 9,
      users: 32,
      selected : true
    },
    {
      topics: 'Skill And Developemnt',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/17324cc06cc3255ff75cba93aabec7dbad92ff915b30a136f95bd8841a855ae7?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#9333ea',
      percentage: 65,
      users: 27,
      selected : true

    },
    {
      topics: 'Marketing',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/a418240f0e19660ab580d5236c870aabb797b151ac9983af5326c0c501612226?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#ea580c',
      percentage: 77,
      users: 14,

      selected : true

    },
    {
      topics: 'Data Security',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/e026b0fc61b50bf0a2983c17e8d0453003fd9c9e80f4cf319281934dcae3c54a?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#16a34a',
      percentage: 41,
      users: 22,
      selected : true

    },
    {
      topics: 'Employee  Training',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/a2c6a703430fd8a289fbaf660521b20d3daeb3db30c2cf02a53f4b511759591e?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#dc2626',
      percentage: 25,
      users: 9,
      selected : true

    },
    {
      topics: 'Return Guidlines',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/300f355d501b094ce892883cb05e77454d6ce3b4ec1da92ca8424e8a9eb10f9f?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#0891b2',
      percentage: 37,
      users: 31,
      selected : true

    },
    {
      topics: 'Scheduling',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/86bf01b4aace25e61fff389eb23bf41351400a083c42f4c6998807855652b821?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#16a34a',
      percentage: 41,
      users: 22,      selected : true

    },
    {
      topics: 'Help Desk',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/d20e85e8f2939af134339d7f124b2b819d0da126acdd7d06a5cdbe96abf82fb4?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#ea580c',
      users:14,
      percentage: 77,      selected : true

    },
    {
      topics: 'Software Solution',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/f9d8fe802d921e4e25e1a65c5c1f53b2dbad0b6effc0e041d53d568a5f18d2af?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#16a34a',
      percentage: 9,
      users:14,      selected : true

    },
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
  selectTab(selectedTab: any): void {
    // 1. Deselect all other tabs
    this.TabGroup.forEach(tab => tab.isSelect = false);

    // 2. Select the clicked tab
    selectedTab.isSelect = true; 
    this.selectedTab = selectedTab;
    console.log("Selected tab is :",this.selectedTab.name);


    // You can also add logic here to handle the tab selection, 
    // such as loading content for the selected tab.  For example:
    // this.loadContent(selectedTab.name);
  }
  selectedCount = this.topics.length;
  loadContent(tabName: string) {
    // Implement your logic here to load content based on the selected tab.
    console.log("Loading content for:", tabName);
    // Example: You might use *ngIf to show/hide components.
    // Or you might fetch data from a service based on the tabName.
  }

  countSelected() {
    this.selectedCount = this.topics.filter(topics => topics.selected).length;
  }

  clearFilters(){
    this.topics.forEach(topic => topic.selected = false);  // Uncheck all checkboxes
    this.countSelected();  // Update the selected count
  }

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
