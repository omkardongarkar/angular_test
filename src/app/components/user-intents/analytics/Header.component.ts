import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent {}
