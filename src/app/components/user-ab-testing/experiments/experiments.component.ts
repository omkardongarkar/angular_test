import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

interface Experiment {
  name: string
  status: 'Active' | 'Inactive'
  duration: string
  startDate: string
}

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ExperimentsComponent implements OnInit {
  experiments: Experiment[] = [
    {
      name: 'Update system prompt for frustrated users talking about physics',
      status: 'Active',
      duration: '34 Days',
      startDate: 'Dec 3, 2024',
    },
    {
      name: 'Response Time Delay',
      status: 'Active',
      duration: '42 Days',
      startDate: 'Dec 3, 2024',
    },
    {
      name: 'Rephrased Error Messages',
      status: 'Active',
      duration: '29 Days',
      startDate: 'Dec 3, 2024',
    },
    {
      name: 'Comparing different product recommendations when users ask for alternatives.',
      status: 'Inactive',
      duration: '56 Days',
      startDate: 'Dec 3, 2024',
    },
    {
      name: 'Offering users self-service documentation vs. guiding them to chat.',
      status: 'Inactive',
      duration: '21 Days',
      startDate: 'Dec 3, 2024',
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
