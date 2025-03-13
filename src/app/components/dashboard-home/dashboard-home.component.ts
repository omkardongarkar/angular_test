import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { CommonUtilityService } from '../../services/common-utility.service';
import { AgentPerformanceComponent } from './home-tabs/agent-performance/agent-performance.component';
import { ErrorRateComponent } from './home-tabs/error-rate/error-rate.component';
import { HomeAvgResolutionTimeComponent } from './home-tabs/home-avg-resolution-time/home-avg-resolution-time.component';
import { HomeCustomerSatisfactionComponent } from './home-tabs/home-customer-satisfaction/home-customer-satisfaction.component';
import { HomeDailyUsersComponent } from './home-tabs/home-daily-users/home-daily-users.component';
import { HomeResolutionRateComponent } from './home-tabs/home-resolution-rate/home-resolution-rate.component';
import { HomeSessionsHandledComponent } from './home-tabs/home-sessions-handled/home-sessions-handled.component';
import { HomeTopIssuesComponent } from './home-tabs/home-top-issues/home-top-issues.component';
import { HomeTopQueriesComponent } from './home-tabs/home-top-queries/home-top-queries.component';
import { CommonModule } from '@angular/common';
import { InsightsComponent } from './home-tabs/insights/insights.component';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss',
  imports: [
    AgentPerformanceComponent,
    ErrorRateComponent,
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

export class DashboardHomeComponent implements OnInit {

  homeTabsArray: any[] = [
    {
      id: 1,
      text: 'Agent Performance',
      value: '3.9/5',
      Active: false,
      component: 'app-agent-performance'
    },
    {
      id: 2,
      text: 'Daily Users',
      value: '4324',
      Active: false,
      component: 'app-home-daily-users'
    },
    {
      id: 3,
      text: 'Sessions Handled',
      value: '6203',
      Active: false,
      component: 'app-home-sessions-handled'
    },
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
    {
      id: 9,
      text: 'Error Rate',
      value: '13.6%',
      Active: false,
      component: 'app-error-rate'
    },
  ];

  activeComponent: string = '';

  // isRoleAllAgent: boolean = true;
  selectedTab: any;

  constructor(private CommonUtility: CommonUtilityService) { }

  ngOnInit() {
    // console.log("All Agents this.CommonUtility.isAll_Agnent : ", this.CommonUtility.isAll_Agnent);
    // this.isRoleAllAgent = this.CommonUtility.isAll_Agnent;

      this.selectedTab = this.homeTabsArray[0]; // Default selected [homeMetric] if role is not isAll_Agnent
      this.activeComponent = this.homeTabsArray[0].component;
  }

  
  changeHomeTab(tab: any) {
    console.log("Home Tab Clicked : ",tab);
    
    // Deactivate all tabs
    this.homeTabsArray.forEach(t => t.Active = false);

    // Activate selected tab
    tab.Active = true;
    this.selectedTab = tab;
    console.log("tab.Active : ",tab.Active);

    // Load the selected component
    this.activeComponent = tab.component;
    console.log("this.activeComponent : ",this.activeComponent );
  }
}
