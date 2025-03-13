import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-tabs',
  templateUrl: './Tabs.component.html',
  styleUrls: ['./Tabs.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TabsComponent {
  activeTab = 'trends'
}
