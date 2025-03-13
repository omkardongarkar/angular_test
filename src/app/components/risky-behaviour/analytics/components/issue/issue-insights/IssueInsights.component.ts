import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IssueInsightsHeader } from './IssueInsightsHeader.component'
import { IssueList } from './IssueList.component'

@Component({
  selector: 'issue-insights',
  template: `
    <div class="insights-container">
      <issue-insights-header></issue-insights-header>
      <issue-list></issue-list>
    </div>
  `,
  styles: [
    `
      .insights-container {
        border-right: 1px solid rgba(212, 212, 212, 1);
        display: flex;
        max-width: 668px;
        flex-direction: column;
        height: 100vh;
        overflow-y: auto;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule, IssueInsightsHeader, IssueList],
})
export class IssueInsightsComponent {}
