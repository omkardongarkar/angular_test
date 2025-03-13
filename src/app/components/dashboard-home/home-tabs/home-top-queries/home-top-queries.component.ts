import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Topics {
  topics: string
  icon: string
  color: string
  users: number
  percentage: number
  selected:boolean
}

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
  interactions: { count: number; trend: number },
  errorRate: number
}

@Component({
  selector: 'app-home-top-queries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-top-queries.component.html',
  styleUrl: './home-top-queries.component.scss'
})

export class HomeTopQueriesComponent implements OnInit {

  constructor(){}

  // Table Related Things
  sortOrder: any
  data: any
  ngOnInit(): void {
      this.data = [...this.tableData];  // Assign initial data
      this.sortOrder = {};   
  }

  // emotions: EmotionInsight[] = [
  //   {
  //     emotion: 'Neutral',
  //     icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/80285fef91c6495b1a649ed2091196ebe62ad4da56fdcf64616eba22c6b505df?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
  //     color: '#4f46e5',
  //     percentage: 32,
  //     users: 24,
  //     selected : true
  //   },
  //   {
  //     emotion: 'Positive',
  //     icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/17324cc06cc3255ff75cba93aabec7dbad92ff915b30a136f95bd8841a855ae7?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
  //     color: '#9333ea',
  //     percentage: 27,
  //     users: 12,
  //     selected : true

  //   },
  //   {
  //     emotion: 'Negative',
  //     icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/a418240f0e19660ab580d5236c870aabb797b151ac9983af5326c0c501612226?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
  //     color: '#ea580c',
  //     percentage: 14,
  //     users: 9,

  //     selected : true

  //   },
  //   {
  //     emotion: 'Mixed',
  //     icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/e026b0fc61b50bf0a2983c17e8d0453003fd9c9e80f4cf319281934dcae3c54a?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
  //     color: '#16a34a',
  //     percentage: 22,
  //     users: 7,
  //     selected : true
  //   },
  //   {
  //     emotion: 'Very Positive',
  //     icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/a2c6a703430fd8a289fbaf660521b20d3daeb3db30c2cf02a53f4b511759591e?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
  //     color: '#dc2626',
  //     percentage: 9,
  //     users: 14,
  //     selected : true
  //   },
  //   {
  //     emotion: 'Very Negative',
  //     icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/300f355d501b094ce892883cb05e77454d6ce3b4ec1da92ca8424e8a9eb10f9f?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
  //     color: '#0891b2',
  //     percentage: 31,
  //     users: 5,
  //     selected : true
  //   },
    
  // ]
  // selectedCount = this.emotions.length;

  clearFilters(): void {
    console.log("In clear Selection");
  }
  
    
  topics: Topics[] = [
    {
      topics: 'How to track my order?',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/80285fef91c6495b1a649ed2091196ebe62ad4da56fdcf64616eba22c6b505df?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#4f46e5',
      percentage: 9,
      users: 32,
      selected : true
    },
    {
      topics: 'What is the return policy for the product?',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/17324cc06cc3255ff75cba93aabec7dbad92ff915b30a136f95bd8841a855ae7?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#9333ea',
      percentage: 65,
      users: 27,
      selected : true
    },
    {
      topics: 'Can I cancel my order after purchase?',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/a418240f0e19660ab580d5236c870aabb797b151ac9983af5326c0c501612226?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#ea580c',
      percentage: 77,
      users: 14,
      selected : true
    },
    {
      topics: 'Are there any ongoing discounts or offers?',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/e026b0fc61b50bf0a2983c17e8d0453003fd9c9e80f4cf319281934dcae3c54a?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#16a34a',
      percentage: 41,
      users: 22,
      selected : true
    },
    {
      topics: 'What are the product specifications?',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/a2c6a703430fd8a289fbaf660521b20d3daeb3db30c2cf02a53f4b511759591e?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#dc2626',
      percentage: 25,
      users: 9,
      selected : true
    },
    {
      topics: 'How to claim a warranty?',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/300f355d501b094ce892883cb05e77454d6ce3b4ec1da92ca8424e8a9eb10f9f?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#0891b2',
      percentage: 37,
      users: 31,
      selected : true
    },
    {
      topics: 'Is this product available in my region?',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/86bf01b4aace25e61fff389eb23bf41351400a083c42f4c6998807855652b821?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#16a34a',
      percentage: 41,
      users: 22,      
      selected : true
    },
    {
      topics: 'What payment methods are accepted?',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/d20e85e8f2939af134339d7f124b2b819d0da126acdd7d06a5cdbe96abf82fb4?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#ea580c',
      users:34,
      percentage: 77,      
      selected : true
    },
    {
      topics: 'How can I get a replacement for a defective product?',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/a2c6a703430fd8a289fbaf660521b20d3daeb3db30c2cf02a53f4b511759591e?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#dc2626',
      users:23,
      percentage: 64,      
      selected : true
    },
    {
      topics: 'How do I check the shipping cost?',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/300f355d501b094ce892883cb05e77454d6ce3b4ec1da92ca8424e8a9eb10f9f?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#16a34a',
      users:14,
      percentage: 23,      
      selected : true
    },
  ]


  tableData: TableRow[] = [
    { users: { count: 47, trend: 23 }, retention: 23, interactions: { count: 47, trend: 12 }, errorRate: 18 },
    { users: { count: 12, trend: 20 }, retention: 30, interactions: { count: 19, trend: 15 }, errorRate: 20 },
    { users: { count: 56, trend: 15 }, retention: 25, interactions: { count: 52, trend: 10 }, errorRate: 16 },
    { users: { count: 73, trend: 28 }, retention: 27, interactions: { count: 15, trend: 13 }, errorRate: 18 },
    { users: { count: 18, trend: 22 }, retention: 20, interactions: { count: 41, trend: 12 }, errorRate: 19 },
    { users: { count: 65, trend: 25 }, retention: 23, interactions: { count: 38, trend: 18 }, errorRate: 18 },
    { users: { count: 47, trend: 23 }, retention: 23, interactions: { count: 47, trend: 12 }, errorRate: 18 },
    { users: { count: 12, trend: 20 }, retention: 30, interactions: { count: 19, trend: 15 }, errorRate: 20 },
    { users: { count: 12, trend: 20 }, retention: 30, interactions: { count: 19, trend: 15 }, errorRate: 20 },
    { users: { count: 56, trend: 15 }, retention: 25, interactions: { count: 52, trend: 10 }, errorRate: 16 },
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
  
  totalCount = 124
  totalPercentage = 65
}
