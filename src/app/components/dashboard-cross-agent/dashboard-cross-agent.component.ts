import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { CommonUtilityService } from '../../services/common-utility.service';
import { CommonModule } from '@angular/common';
import { ResolutionRateComponent } from './cross-agent-tabs/resolution-rate/resolution-rate.component';
import { DailyUsersComponent } from './cross-agent-tabs/daily-users/daily-users.component';
import { NumberOfAgentComponent } from './cross-agent-tabs/number-of-agent/number-of-agent.component';
import { TopIssuesComponent } from './cross-agent-tabs/top-issues/top-issues.component';
import { TopQueriesComponent } from './cross-agent-tabs/top-queries/top-queries.component';
import { ActionIssuesComponent } from './cross-agent-tabs/action-issues/action-issues.component';
import { KnowledgeGapIssuesComponent } from './cross-agent-tabs/knowledge-gap-issues/knowledge-gap-issues.component';
import { SessionHandledComponent } from './cross-agent-tabs/session-handled/session-handled.component';
import { ComprehensionIssuesComponent } from './cross-agent-tabs/comprehension-issues/comprehension-issues.component';
import { CustomerSatisfactionComponent } from './cross-agent-tabs/customer-satisfaction/customer-satisfaction.component';
import { AvgResolutionTimeComponent } from './cross-agent-tabs/avg-resolution-time/avg-resolution-time.component';

@Component({
  selector: 'app-dashboard-cross-agent',
  standalone: true,
  templateUrl: './dashboard-cross-agent.component.html',
  styleUrl: './dashboard-cross-agent.component.scss',
  imports: [
    AvgResolutionTimeComponent,
    CustomerSatisfactionComponent,
    ComprehensionIssuesComponent,
    SessionHandledComponent,
    KnowledgeGapIssuesComponent,
    ActionIssuesComponent,
    TopQueriesComponent,
    TopIssuesComponent,
    NumberOfAgentComponent,
    DailyUsersComponent,
    ResolutionRateComponent,
    CommonModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class DashboardCrossAgentComponent implements OnInit {
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

  activeComponent: string = '';
  selectedTab: any;

  constructor(private CommonUtility: CommonUtilityService) { }

  ngOnInit() {
    // console.log("All Agents this.CommonUtility.isAll_Agnent : ", this.CommonUtility.isAll_Agnent);
    // this.isRoleAllAgent = this.CommonUtility.isAll_Agnent;

    this.selectedTab = this.allAgentTabsArray[0]; // Default selected [allAgentMetric] if role is isAll_Agnent
    this.activeComponent = this.allAgentTabsArray[0].component;
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

}
