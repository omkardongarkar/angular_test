import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InsightsPanelComponent } from './insights-panel/insights-panel.component'
import { DataTableComponent } from './data-table/data-table.component'

interface ViewTab {
  icon: string
  label: string
  isActive: boolean
}

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
  standalone: true,
  imports: [CommonModule, InsightsPanelComponent, DataTableComponent],
})
export class DataViewComponent {
  viewTabs: ViewTab[] = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/fb96ef96eb1c930bdaf5788128faa1e7f849fc9318f5fd221ef071cc2f557b25?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      label: 'Table',
      isActive: true,
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/74adcb159887da6584de33af8a16bb603aa88d4490a721516e44f5af06a1e684?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      label: 'Map',
      isActive: false,
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/5d312017aad5842ec95a3fb314839d7587fd219fad467bb07e78835a6d256bc4?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      label: 'Trends',
      isActive: false,
    },
  ]

  setActiveTab(index: number): void {
    this.viewTabs = this.viewTabs.map((tab, i) => ({
      ...tab,
      isActive: i === index,
    }))
  }
}
