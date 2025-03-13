import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { CommonUtilityService } from '../../services/common-utility.service';
import { ErrorRateComponent } from '../error-rate/analytics/error-rate.component';
import { AvgResolutionTimeComponent } from '../dashboard-cross-agent/cross-agent-tabs/avg-resolution-time/avg-resolution-time.component';
import { CustomerSatisfactionComponent } from '../dashboard-cross-agent/cross-agent-tabs/customer-satisfaction/customer-satisfaction.component';
import { ComprehensionIssuesComponent } from '../dashboard-cross-agent/cross-agent-tabs/comprehension-issues/comprehension-issues.component';
import { SessionHandledComponent } from '../dashboard-cross-agent/cross-agent-tabs/session-handled/session-handled.component';
import { AgentPerformanceComponent } from '../dashboard-home/home-tabs/agent-performance/agent-performance.component';
import { KnowledgeGapIssuesComponent } from '../dashboard-cross-agent/cross-agent-tabs/knowledge-gap-issues/knowledge-gap-issues.component';
import { ActionIssuesComponent } from '../dashboard-cross-agent/cross-agent-tabs/action-issues/action-issues.component';
import { TopQueriesComponent } from '../dashboard-cross-agent/cross-agent-tabs/top-queries/top-queries.component';
import { TopIssuesComponent } from '../dashboard-cross-agent/cross-agent-tabs/top-issues/top-issues.component';
import { NumberOfAgentComponent } from '../dashboard-cross-agent/cross-agent-tabs/number-of-agent/number-of-agent.component';
import { DailyUsersComponent } from '../dashboard-cross-agent/cross-agent-tabs/daily-users/daily-users.component';
import { ResolutionRateComponent } from '../dashboard-cross-agent/cross-agent-tabs/resolution-rate/resolution-rate.component';
import { HomeAvgResolutionTimeComponent } from '../dashboard-home/home-tabs/home-avg-resolution-time/home-avg-resolution-time.component';
import { HomeCustomerSatisfactionComponent } from '../dashboard-home/home-tabs/home-customer-satisfaction/home-customer-satisfaction.component';
import { HomeDailyUsersComponent } from '../dashboard-home/home-tabs/home-daily-users/home-daily-users.component';
import { HomeResolutionRateComponent } from '../dashboard-home/home-tabs/home-resolution-rate/home-resolution-rate.component';
import { HomeSessionsHandledComponent } from '../dashboard-home/home-tabs/home-sessions-handled/home-sessions-handled.component';
import { HomeTopIssuesComponent } from '../dashboard-home/home-tabs/home-top-issues/home-top-issues.component';
import { HomeTopQueriesComponent } from '../dashboard-home/home-tabs/home-top-queries/home-top-queries.component';
import { InsightsComponent } from '../dashboard-home/home-tabs/insights/insights.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone: true,
  imports: [
    AvgResolutionTimeComponent,
    CustomerSatisfactionComponent,
    ComprehensionIssuesComponent,
    SessionHandledComponent,
    AgentPerformanceComponent,
    KnowledgeGapIssuesComponent,
    ActionIssuesComponent,
    TopQueriesComponent,
    ErrorRateComponent,
    TopIssuesComponent,
    NumberOfAgentComponent,
    DailyUsersComponent,
    ResolutionRateComponent,
    HomeAvgResolutionTimeComponent,
    HomeCustomerSatisfactionComponent,
    HomeDailyUsersComponent,
    HomeResolutionRateComponent,
    HomeSessionsHandledComponent,
    HomeTopIssuesComponent,
    HomeTopQueriesComponent,
    CommonModule,
    InsightsComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class HomePageComponent implements OnInit {
  allAgentTabsArray: any[] = [
    {
      id: 1,
      text: 'Number Of Agents',
      value: '6',
      Active: false,
      component: 'app-number-of-agent'
    },
    {
      id: 2,
      text: 'Daily Users',
      value: '4324',
      Active: false,
      component: 'app-daily-users'
    },
    {
      id: 3,
      text: 'Sessions Handled',
      value: '6203',
      Active: false,
      component: 'app-session-handled'
    },
    {
      id: 4,
      text: 'Top Queries',
      value: '32',
      Active: false,
      component: 'app-top-queries'
    },
    {
      id: 5,
      text: 'Top Issues',
      value: '12',
      Active: false,
      component: 'app-top-issues'
    },
    {
      id: 6,
      text: 'Resolution Rate',
      value: '3.5/5',
      Active: false,
      component: 'app-resolution-rate'
    },
    {
      id: 7,
      text: 'Avg Resolution Time',
      value: '3m 40s',
      Active: false,
      component: 'app-avg-resolution-time'
    },
    {
      id: 8,
      text: 'Customer Satisfaction',
      value: '3.7/5',
      Active: false,
      component: 'app-customer-satisfaction'
    },
    {
      id: 9,
      text: 'Comprehension Issues',
      value: '23',
      Active: false,
      component: 'app-comprehension-issues'
    },
    {
      id: 10,
      text: 'Knowledge Gap Issues',
      value: '15',
      Active: false,
      component: 'app-knowledge-gap-issues'
    },
    {
      id: 11,
      text: 'Action Issues',
      value: '23',
      Active: false,
      component: 'app-action-issues'
    }
  ];

  homeTabsArray: any[] = [
    {
      id: 1,
      text: 'Agent Performance',
      value: '3.9/5',
      Active: false,
      component: 'app-agent-performance'
    },
    // {
    //   id: 2,
    //   text: 'Daily Users',
    //   value: '4324',
    //   Active: false,
    //   component: 'app-home-daily-users'
    // },
    // {
    //   id: 3,
    //   text: 'Sessions Handled',
    //   value: '6203',
    //   Active: false,
    //   component: 'app-home-sessions-handled'
    // },
    {
      id: 4,
      text: 'Resolution Rate',
      value: '3.5/5',
      Active: false,
      component: 'app-home-resolution-rate'
    },
    {
      id: 5,
      text: 'Top Queries',
      value: '32',
      Active: false,
      component: 'app-home-top-queries'
    },
    {
      id: 6,
      text: 'Top Issues',
      value: '12',
      Active: false,
      component: 'app-home-top-issues'
    },
    {
      id: 7,
      text: 'Avg Resolution Time',
      value: '3m 40s',
      Active: false,
      component: 'app-home-avg-resolution-time'
    },
    {
      id: 8,
      text: 'Customer Satisfaction',
      value: '3.7/5',
      Active: false,
      component: 'app-home-customer-satisfaction'
    },
    // {
    //   id: 9,
    //   text: 'Error Rate',
    //   value: '13.6%',
    //   Active: false,
    //   component: 'app-error-rate'
    // },
  ];

  activeComponent: string = '';
  // chart: any

  isRoleAllAgent: boolean = true;
  selectedTab: any;

  constructor(private CommonUtility: CommonUtilityService) { }

  ngOnInit() {
    console.log("All Agents this.CommonUtility.isAll_Agnent : ", this.CommonUtility.isAll_Agnent);

    // this.isRoleAllAgent = this.CommonUtility.isAll_Agnent;
    this.isRoleAllAgent = false;

    if (this.isRoleAllAgent) {
      this.selectedTab = this.allAgentTabsArray[0]; // Default selected [allAgentMetric] if role is isAll_Agnent
      this.activeComponent = this.allAgentTabsArray[0].component;
    } else {
      this.selectedTab = this.homeTabsArray[0]; // Default selected [homeMetric] if role is not isAll_Agnent
      this.activeComponent = this.homeTabsArray[0].component;
    }

    // this.initializeUsersChart()
    // this.initializePlatformChart()   
  }

  ngAfterViewInit(): void {

    // this.initializeUsersChart();
    // this.initializePlatformChart();
  }

  changeAllAgentTab(tab: any) {
    console.log("All Agent Tab Clicked : ", tab);

    // Deactivate all tabs
    this.allAgentTabsArray.forEach(t => t.Active = false);

    // Activate selected tab
    tab.Active = true;
    this.selectedTab = tab;
    console.log("tab.Active : ", tab.Active);

    // Load the selected component
    this.activeComponent = tab.component;
    console.log("this.activeComponent : ", this.activeComponent);

  }

  changeHomeTab(tab: any) {
    console.log("Home Tab Clicked : ", tab);

    // Deactivate all tabs
    this.homeTabsArray.forEach(t => t.Active = false);

    // Activate selected tab
    tab.Active = true;
    this.selectedTab = tab;
    console.log("tab.Active : ", tab.Active);


    // Load the selected component
    this.activeComponent = tab.component;
    console.log("this.activeComponent : ", this.activeComponent);
  }

  // private initializeUsersChart() {
  //   if (this.chart) {
  //     this.chart.destroy();
  //     console.log("Chart Destroyed")
  //   }

  //   const ctx = document.getElementById('usersChart') as HTMLCanvasElement
  //   new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //       labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  //       datasets: [
  //         {
  //           label: 'Active Users',
  //           data: [4000, 3500, 4200, 3800, 4100, 3900, 4324],
  //           borderColor: '#4F46E5',
  //           tension: 0.4,
  //         },
  //         {
  //           label: 'New Users',
  //           data: [2000, 2200, 1800, 2400, 2100, 2300, 2500],
  //           borderColor: '#22C55E',
  //           tension: 0.4,
  //         },
  //       ],
  //     },
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       plugins: {
  //         legend: {
  //           position: 'bottom',
  //         },
  //       },
  //     },
  //   })
  // }

  // private initializePlatformChart() {
  //   const ctx = document.getElementById('platformChart') as HTMLCanvasElement
  //   if (this.chart) {
  //     this.chart.destroy();
  //     console.log("Chart Destroyed")
  //   }

  //   if (ctx) {
  //     new Chart(ctx, {
  //       type: 'doughnut',
  //       data: {
  //         labels: ['Desktop', 'Mobile', 'Tablet'],
  //         datasets: [
  //           {
  //             data: [45, 35, 20],
  //             backgroundColor: ['#4F46E5', '#22C55E', '#EAB308'],
  //           },
  //         ],
  //       },
  //       options: {
  //         responsive: true,
  //         maintainAspectRatio: false,
  //       },
  //     })
  //   }
  // }
}
