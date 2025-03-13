import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insights.component.html',
  styleUrl: './insights.component.scss'
})

export class InsightsComponent {
  insightItems: InsightItem[] = [
    {
      text: "Users in Northeast are experiencing continued unusual low user sentiment.",
      hasDetailedView: true,
    },
    {
      text: "Users in Northeast are experiencing increased issues submissions and lower user sentiment.",
      hasDetailedView: true,
    },
    {
      text: "The volume of Interactions about",
      badge: { text: "Refund" },
      trend: {
        type: TrendType.UP,
        value: "500%",
        percentage: "500%",
        relativeDays: 6,
      },
      hasDetailedView: true,
    },
    {
      text: "User sentiment going down by",
      trend: {
        type: TrendType.DOWN,
        value: "150%",
        percentage: "150%",
        relativeDays: 7,
      },
      hasDetailedView: true,
    },
    {
      text: "The volume of Interactions about",
      badge: { text: "Refund Policy" },
      trend: {
        type: TrendType.UP,
        value: "450%",
        percentage: "450%",
        relativeDays: 4,
      },
      hasDetailedView: true,
    },
    {
      text: "The volume of Interactions about",
      badge: { text: "Training" },
      trend: {
        type: TrendType.DOWN,
        value: "180%",
        percentage: "180%",
        relativeDays: -3,
      },
      hasDetailedView: true,
    },
    {
      text: "The volume of Interactions about",
      badge: { text: "Tech Support" },
      trend: {
        type: TrendType.UP,
        value: "250%",
        percentage: "250%",
        relativeDays: 4,
      },
      hasDetailedView: true,
    },
    {
      text: "The volume of Interactions about",
      badge: { text: "Processes" },
      trend: {
        type: TrendType.UP,
        value: "300%",
        percentage: "300%",
        relativeDays: 4,
      },
      hasDetailedView: true,
    },
  ];

  formatRelativeDays(days: number): string {
    const prefix = days >= 0 ? "+" : "";
    return `(${prefix}${days}) relative to last 7 days`;
  }
}

enum TrendType {
  UP = "up",
  DOWN = "down",
  NONE = "none",
}

interface Badge {
  text: string;
}

interface Trend {
  type: TrendType;
  value: string;
  percentage: string;
  relativeDays: number;
}

interface InsightItem {
  text: string;
  badge?: Badge;
  trend?: Trend;
  hasDetailedView: boolean;
}
