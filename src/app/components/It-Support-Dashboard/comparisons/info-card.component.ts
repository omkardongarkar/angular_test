import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="info-card">
      <header class="card-header">
        <h2 class="title">{{ title }}</h2>
        <div class="more-icon">
          <div [innerHTML]="moreIconSvg"></div>
        </div>
      </header>
      <div class="card-content">
        <ng-content></ng-content>
      </div>
    </article>
  `,
  styles: [
    `
      .info-card {
        flex: 1;
        border-radius: 6px;
        border-bottom: 1px solid #d4d4d4;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        padding: 12px;
        background-color: #fff;

        @media (max-width: 640px) {
          padding: 8px;
        }
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
      }

      .title {
        color: #171717;
        font-size: 12px;
        font-weight: 700;
        line-height: 20px;
        margin: 0;
      }

      .more-icon {
        padding: 2px;
        cursor: pointer;
      }

      .card-content {
        height: 100%;
      }
    `,
  ],
})
export class InfoCardComponent {
  @Input() title: string = ''

  moreIconSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-more" style="width: 16px; height: 16px">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66675 7.99935C6.66675 7.26297 7.2637 6.66602 8.00008 6.66602C8.73646 6.66602 9.33341 7.26297 9.33341 7.99935C9.33341 8.73573 8.73646 9.33268 8.00008 9.33268C7.2637 9.33268 6.66675 8.73573 6.66675 7.99935Z" fill="#737373"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66675 3.33333C6.66675 2.59695 7.2637 2 8.00008 2C8.73646 2 9.33341 2.59695 9.33341 3.33333C9.33341 4.06971 8.73646 4.66667 8.00008 4.66667C7.2637 4.66667 6.66675 4.06971 6.66675 3.33333Z" fill="#737373"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66675 12.6673C6.66675 11.9309 7.2637 11.334 8.00008 11.334C8.73646 11.334 9.33341 11.9309 9.33341 12.6673C9.33341 13.4037 8.73646 14.0007 8.00008 14.0007C7.2637 14.0007 6.66675 13.4037 6.66675 12.6673Z" fill="#171717"></path>
  </svg>`
}
