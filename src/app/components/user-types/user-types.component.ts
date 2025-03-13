import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { ChartComponent } from './Chart.component';

interface UserType {
  name: string
  barClass: string
}

interface TableRow {
  users: { count: number; percentage: number }
  retention: number
  interactions: { count: number; percentage: number }
}

@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.component.html',
  styleUrls: ['./user-types.component.scss'],
  standalone : true,
  imports :[CommonModule,ScatterChartComponent,ChartComponent]
})
export class UserTypesComponent implements OnInit {
  userTypes: UserType[] = [
    { name: 'Enterprise Customers', barClass: 'enterprise' },
    { name: 'Low-Satisfaction Users', barClass: 'low-satisfaction' },
    { name: 'Refund/Return Users', barClass: 'refund' },
    { name: 'Repetitive Query Users', barClass: 'repetitive' },
    { name: 'Frequent Users', barClass: 'frequent' },
  ]
  selectedTab : any;
  tableData: TableRow[] = [
    {
      users: { count: 47, percentage: 23 },
      retention: 23,
      interactions: { count: 47, percentage: 12 },
    },
    {
      users: { count: 12, percentage: 20 },
      retention: 30,
      interactions: { count: 19, percentage: 15 },
    },
    {
      users: { count: 56, percentage: 25 },
      retention: 25,
      interactions: { count: 52, percentage: 10 },
    },
    {
      users: { count: 73, percentage: 28 },
      retention: 27,
      interactions: { count: 15, percentage: 13 },
    },
    {
      users: { count: 18, percentage: 22 },
      retention: 20,
      interactions: { count: 41, percentage: 12 },
    },
  ]

  constructor() {}
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
  ngOnInit(): void {
    this.selectedTab = this.TabGroup.find(tab => tab.isSelect === true) || null;
    if (!this.selectedTab && this.TabGroup.length > 0) {
      this.selectedTab = this.TabGroup[0]; // Select the first tab if none is initially selected
      this.TabGroup[0].isSelect = true; // Make sure the first tab's isSelect is true
    }
    this.loadContent(this.selectedTab?.name || ''); // Load content for the selected tab

  }
  loadContent(tabName: string) {
    // Implement your logic here to load content based on the selected tab.
    console.log("Loading content for:", tabName);
    // Example: You might use *ngIf to show/hide components.
    // Or you might fetch data from a service based on the tabName.
  }
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
  onExportCSV(): void {
    // Implement CSV export functionality
    console.log('Exporting CSV...')
  }

  onViewDetails(): void {
    // Implement view details functionality
    console.log('Viewing details...')
  }

  onAddUserType(): void {
    // Implement add user type functionality
    console.log('Adding new user type...')
  }

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value
    // Implement search functionality
    console.log('Searching for:', searchTerm)
  }

  onTabChange(tab: string): void {
    // Implement tab change functionality
    console.log('Changing to tab:', tab)
  }

  onDateRangeChange(): void {
    // Implement date range change functionality
    console.log('Changing date range...')
  }
}
