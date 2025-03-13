import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'issue-insights-header',
  template: `
    <header class="header">
      <div class="selected-badge">Selected</div>
      <div class="stats">
        <div class="stat-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/273ba70ac1506fe21bdf79c7a29f80a7189f821c128fda9e2089161fc1f51bbd?apiKey=43632c7bd1d84079a851d9b51a08f2e5&"
            alt="Total issues icon"
            class="stat-icon"
          />
          <span class="stat-value">124</span>
        </div>
        <div class="stat-item">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/d02676beb6889e55677be2927f01af3f01f5fc09b4d6af3bf4bd88ab445714b7?apiKey=43632c7bd1d84079a851d9b51a08f2e5&"
            alt="Percentage icon"
            class="stat-icon"
          />
          <span class="stat-value">65%</span>
        </div>
      </div>
      <button class="clear-btn" aria-label="Clear selection">
        <span>Clear</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/fbba7ef3ad99e3121427f8ab4547d923ec5c2e4af62c3cee64ce87836cd7040a?apiKey=43632c7bd1d84079a851d9b51a08f2e5&"
          alt=""
          class="clear-icon"
        />
      </button>
    </header>
  `,
  styles: [
    `
      .header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 16px;
        flex-wrap: wrap;
      }

      .selected-badge {
        border-radius: 9999px;
        background-color: #f5f5f5;
        padding: 0 8px;
        color: #171717;
        font: 500 12px/24px Inter, sans-serif;
        border: 1px solid #d4d4d4;
      }

      .stats {
        display: flex;
        gap: 8px;
      }

      .stat-item {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #000;
        font: 400 12px/24px Inter, sans-serif;
      }

      .stat-icon {
        width: 16px;
        height: 16px;
      }

      .separator {
        flex: 1;
        min-width: 240px;
        height: 1px;
        background: #d4d4d4;
        margin: auto 0;
      }

      .clear-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-left:10px;
        color: #000;
        font: 400 12px/24px Inter, sans-serif;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
      }

      .clear-icon {
        width: 16px;
        height: 16px;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
})
export class IssueInsightsHeader {}
