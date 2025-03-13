import { CommonModule } from '@angular/common'
import { Component, OnInit, Type ,NO_ERRORS_SCHEMA, ChangeDetectorRef} from '@angular/core'
import { Chart } from 'chart.js/auto'
import { LineChartComponent } from './charts/line-chart.component'
import { PieChartComponent } from './charts/pie-chart.component'
import { MapChartComponent } from './charts/map-chart.component'
import { ProductRefundsDashboardComponent } from '../refund/product-refunds-dashboard.component'
// import { ProductRecommendationsAnalyticsComponent } from '../recommendation/product-recommendations-analytics.component'
import { ProductFeaturesDashboardComponent } from '../features/product-features-dashboard.component'
import { CartValueDashboardComponent } from '../Cart/cart-value.component'
import { RecommendationComponent } from '../recommendation/dashboard.component'
import { BrowsingTimeComponent } from '../browsing-time/browsing-time.component'
import { ComparisonComponent } from '../comparisons/dashboard.component'
import { QueryComponent } from '../queries/dashboard.component'
import { ProductQualityDashboardComponent } from '../quality/product-quality-dashboard.component'
import { WarrantyDashboardComponent } from '../warranties/warranty-dashboard.component'


@Component({
  selector: 'app-It-Support-dashboard',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'], 
  standalone: true,
  imports: [
    ProductRefundsDashboardComponent,RecommendationComponent,ProductFeaturesDashboardComponent,CartValueDashboardComponent,WarrantyDashboardComponent,
    BrowsingTimeComponent,CommonModule, LineChartComponent,PieChartComponent, MapChartComponent,ComparisonComponent,QueryComponent,ProductQualityDashboardComponent],
    schemas: [NO_ERRORS_SCHEMA]
})


export class ItSupportDashboardComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}
  isSession:boolean = true;

  Quality_Issues: boolean = false;
  Product_Recommendation:boolean = false;
  Product_Feature: boolean = false;
  Cart_Value: boolean = false;
  Browsing_Time: boolean = false;
  Product_Comparison:boolean = false;
  Price_Queries: boolean = false;
  AvgResolutionTimeComponent:boolean=false;
  Product_Refund: boolean = true;
  Product_Warranties: boolean = false;

  metricArray:any[]=[
    {
      id:1,
      text:'SoftWare Installations',
      Active:false
    },
    {
      id:2,
      text:'Email Access',
      Active:false
    },
    {
      id:3,
      text:'IT Services',
      Active:false
    },
    {
      id:4,
      text:'Password Resets',
      Active:false
    },
    {
      id:5,
      text:'VPN Setup',
      Active:false
    },    
    {
      id:6,
      text:'Network Connectivity',
      Active:false
    },
    {
      id:7,
      text:'Cybersecurity Best Practices',
      Active:false
    }, 

        {
      id:8,
      text:'Positive Negative Feedback',
      Active:true
    },      
      {
      id:9,
      text:'Product Warranties',
      Active:false
    },
  ];
  
  selectedMetric = this.metricArray[0]; // Default selected metric
  activeTab: any

  ngOnInit() {
    // this.initializeUsersChart()
    // this.initializePlatformChart()
  }
  
  ngAfterViewInit(): void {
    // this.initializeUsersChart();
    // this.initializePlatformChart();
  }

  // changeTab(metric: any) {
  //   debugger
  //   this.selectedMetric = metric;
  // }

  changeTab(metric: any) {
    this.selectedMetric = metric;

    this.Quality_Issues = false;
    this.Product_Recommendation = false;
    this.Product_Feature = false;
    this.Cart_Value = false;
    this.Browsing_Time = false;
    this.Product_Comparison = false;
    this.Price_Queries = false;
    this.AvgResolutionTimeComponent = false;
    this.Product_Refund = false;
    this.Product_Warranties = false;
    // debugger;
    console.log(metric.text);
    switch (metric.text) {
      case 'SoftWare Installations':
        this.Product_Refund = true;
        break;
      case 'Email Access':
        this.Product_Recommendation = true;
        console.log(this.Product_Recommendation);
        break;
      case 'IT Services':
        this.Product_Feature = true;
        break;

        case 'Password Resets':
          this.Cart_Value = true;
          break;
        case 'VPN Setup':
          this.Browsing_Time = true;
          break;
          case 'Network Connectivity':
            this.Product_Comparison = true;
            break;


          case 'Cybersecurity Best Practices':
            this.Price_Queries = true;
            break;

            case 'Positive Negative Feedback':
              this.Quality_Issues = true;
              break; 

            case 'Product Warranties':
              this.Product_Warranties = true;
              break;          
      default:
        // this.Quality_Issues = true;
    }
    this.cdr.detectChanges(); 
  }
  // selectedComponent: Type<any> = Metric1Component; // Default Component
  // changeTab(metric: any) {
  //   switch (metric.id) {
  //     case 'metric1':
  //       this.selectedComponent = Metric1Component;
  //       break;
  //     case 'metric2':
  //       this.selectedComponent = Metric2Component;
  //       break;
  //     case 'metric3':
  //       this.selectedComponent = Metric3Component;
  //       break;
  //     default:
  //       this.selectedComponent = Metric1Component;
  //   }
  // }

  // getComponent(componentName: string): Type<any> {
  //   const componentMap: { [key: string]: Type<any> } = {
  //     'app-metric1': Metric1Component,
  //     'app-metric2': Metric2Component,
  //     'app-metric3': Metric3Component
  //   };
  //   return componentMap[componentName] || Metric1Component;
  // }


  private initializeUsersChart() {
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

  private initializePlatformChart() {
    const ctx = document.getElementById('platformChart') as HTMLCanvasElement
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Desktop', 'Mobile', 'Tablet'],
        datasets: [
          {
            data: [45, 35, 20],
            backgroundColor: ['#4F46E5', '#22C55E', '#EAB308'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    })
  }
}
