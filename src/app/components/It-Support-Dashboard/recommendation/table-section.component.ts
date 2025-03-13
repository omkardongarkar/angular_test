import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TableData } from './dashboard.models'
import { LucideAngularModule } from 'lucide-angular'

@Component({
  selector: 'app-table-section',
  templateUrl: './table-section.component.html',
  styleUrls: ['./table-section.component.scss'],
  standalone: true,
  imports: [CommonModule,LucideAngularModule],
})
export class TableSectionComponent {
  tableData: TableData[] = [
    {
      date: '2024-12-01',
      category: 'Electronics',
      categoryClass: 'category-tag-electronics',
      inquiries: '47 15%',
      conversions: '88%',
      success: '62%',
    },
    {
      date: '2024-12-01',
      category: 'Home Appliances',
      categoryClass: 'category-tag-appliances',
      inquiries: '29 74%',
      conversions: '56%',
      success: '91%',
    },
    {
      date: '2024-12-01',
      category: 'Fashion',
      categoryClass: 'category-tag-fashion',
      inquiries: '38 22%',
      conversions: '67%',
      success: '49%',
    },
    {
      date: '2024-12-02',
      category: 'Electronics',
      categoryClass: 'category-tag-electronics',
      inquiries: '85 33%',
      conversions: '77%',
      success: '11%',
    },
    {
      date: '2024-12-02',
      category: 'Home Appliances',
      categoryClass: 'category-tag-appliances',
      inquiries: '94 28%',
      conversions: '45%',
      success: '60%',
    },
    {
      date: '2024-12-02',
      category: 'Fashion',
      categoryClass: 'category-tag-fashion',
      inquiries: '73 19%',
      conversions: '82%',
      success: '34%',
    },
  ]
}
