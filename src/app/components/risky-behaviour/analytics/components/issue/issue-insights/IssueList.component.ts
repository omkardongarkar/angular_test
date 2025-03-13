import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IssueItem } from './IssueItem.component'

@Component({
  selector: 'issue-list',
  template: `
    <div class="issue-list">
      <issue-item *ngFor="let issue of issues" [issue]="issue"></issue-item>
    </div>
  `,
  styles: [
    `
      .issue-list {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule, IssueItem],
})
export class IssueList {
  issues = [
    {
      id: 1,
      title: 'User is having trouble with payment process',
      count: 32,
      percentage: 24,
      color: 'rgb(79, 70, 229)',
      progressWidth: 224,
    },
    {
      id: 2,
      title: 'User is experiencing technical issues with their internet',
      count: 27,
      percentage: 12,
      color: 'rgb(147, 51, 234)',
      progressWidth: 163,
    },
    // Additional issues following same pattern...
  ]
}
