import { Routes } from '@angular/router';
import { BusinessInsightsComponent } from './components/dashboard/DashboardComponent/dashboard.component';
import { ErrorRateComponent } from './components/error-rate/analytics/error-rate.component';
import { LoginComponent } from './components/login/login.component';
import { RAGComponent } from './components/RAG/Rag.component';
import { RiskyBehaviourComponent } from './components/risky-behaviour/analytics/risk-behaviour.compoenent';
import { TopicsComponent } from './components/topics/analytics-dashboard/topics.component';
import { ExperimentsComponent } from './components/user-ab-testing/experiments/experiments.component';
import { UserQueryInsightsComponent } from './components/User-actions/user-query-insights/User-actions.component';
import { UserEmotionsComponent } from './components/user-emotions/analytics/analytics-insights/user-emotions.component';
import { UserGeographyComponent } from './components/user-geography/analytics/user-geo.component';
import { UserIntentComponent } from './components/user-intents/analytics/user-intent.component';
import { AnchorRetentionComponent } from './components/User-retention/anchor-retention/AnchorRetention.component';
import { UserSentimentComponent } from './components/user-sentiment/user-sentiment.component';
import { UserTypesComponent } from './components/user-types/user-types.component';
import { UserAnalyticsComponent } from './components/Users/userAnalytics/UserAnalytics.component';
import { HomePageComponent } from './components/home/homepage.component';
import { CustomDashboardComponent } from './components/custom-dashboard/analytics-dashboard/homepage.component';
import { Property1GroupComponent } from './components/conversation-chart/property-1-group.component';
import { SettingsComponent } from './components/settings/users-table/settings.component';
import { DashboardCrossAgentComponent } from './components/dashboard-cross-agent/dashboard-cross-agent.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { ItSupportDashboardComponent } from './components/It-Support-Dashboard/analytics-dashboard/homepage.component';
import { ConversationAnalyticsComponent } from './components/user-flow/conversation-analytics.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'signIn',component:LoginComponent},
    
    {path:'home',component:DashboardHomeComponent},
    {path:'cross-agent',component:DashboardCrossAgentComponent},

    {path:'query',component:BusinessInsightsComponent},
    {path:'customdash',component:CustomDashboardComponent},
    {path:'topic',component:TopicsComponent},
    {path:'userintent',component:UserIntentComponent},
    {path:'userGeography',component:UserGeographyComponent},
    {path:'risk',component:RiskyBehaviourComponent},
    {path:'emotion',component:UserEmotionsComponent},
    {path:'rag',component:RAGComponent},
    {path:'sentiment',component:UserSentimentComponent},
    {path:'errorRate',component:ErrorRateComponent},
    {path:'retention',component:AnchorRetentionComponent},
    {path:'actions' , component:UserQueryInsightsComponent},
    {path:'users' , component:UserAnalyticsComponent},
    {path:'flow',component:ConversationAnalyticsComponent},
    {path:'usertypes', component:UserTypesComponent},
    {path:'usertesting',component:ExperimentsComponent},
    {path:'settings',component:SettingsComponent},
    {path:'conversation',component:Property1GroupComponent},
    {path:'itdashboard',component:ItSupportDashboardComponent},
    {path: '**', component: HomePageComponent },

];