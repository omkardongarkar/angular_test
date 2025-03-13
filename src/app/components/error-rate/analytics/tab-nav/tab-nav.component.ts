import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TabNavComponent {
  activeTab = 'overview'

  setActiveTab(tab: string) {
    this.activeTab = tab
  }
}
