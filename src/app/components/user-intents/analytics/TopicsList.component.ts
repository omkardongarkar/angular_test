import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

interface Topics {
  topics: string
  icon: string
  color: string
  users: number
  percentage: number
  selected:boolean
}

@Component({
  selector: 'app-topics-list',
  templateUrl: './TopicsList.component.html',
  styleUrls: ['./TopicsList.component.scss'],
  standalone: true,
  imports: [CommonModule,FormsModule],
})
export class TopicsListComponent {
  topics: Topics[] = [
    {
      topics: 'Sales And Strategy',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/80285fef91c6495b1a649ed2091196ebe62ad4da56fdcf64616eba22c6b505df?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#4f46e5',
      percentage: 9,
      users: 32,
      selected : true
    },
    {
      topics: 'Skill And Developemnt',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/17324cc06cc3255ff75cba93aabec7dbad92ff915b30a136f95bd8841a855ae7?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#9333ea',
      percentage: 65,
      users: 27,
      selected : true

    },
    {
      topics: 'Marketing',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/a418240f0e19660ab580d5236c870aabb797b151ac9983af5326c0c501612226?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#ea580c',
      percentage: 77,
      users: 14,

      selected : true

    },
    {
      topics: 'Data Security',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/e026b0fc61b50bf0a2983c17e8d0453003fd9c9e80f4cf319281934dcae3c54a?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#16a34a',
      percentage: 41,
      users: 22,
      selected : true

    },
    {
      topics: 'Employee  Training',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/a2c6a703430fd8a289fbaf660521b20d3daeb3db30c2cf02a53f4b511759591e?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#dc2626',
      percentage: 25,
      users: 9,
      selected : true

    },
    {
      topics: 'Return Guidlines',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/300f355d501b094ce892883cb05e77454d6ce3b4ec1da92ca8424e8a9eb10f9f?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#0891b2',
      percentage: 37,
      users: 31,
      selected : true

    },
    {
      topics: 'Scheduling',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/86bf01b4aace25e61fff389eb23bf41351400a083c42f4c6998807855652b821?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#16a34a',
      percentage: 41,
      users: 22,      selected : true

    },
    {
      topics: 'Help Desk',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/d20e85e8f2939af134339d7f124b2b819d0da126acdd7d06a5cdbe96abf82fb4?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#ea580c',
      users:14,
      percentage: 77,      selected : true

    },
    {
      topics: 'Software Solution',
      icon: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/f9d8fe802d921e4e25e1a65c5c1f53b2dbad0b6effc0e041d53d568a5f18d2af?apiKey=43632c7bd1d84079a851d9b51a08f2e5&',
      color: '#16a34a',
      percentage: 9,
      users:14,      selected : true

    },
  ]

  // selectedCount = 8
  totalCount = 124
  totalPercentage = 65


  selectedCount = this.topics.length;

  countSelected() {
    // debugger
    this.selectedCount = this.topics.filter(topics => topics.selected).length;
  }

  clearSelection(){
    console.log("In clear Selection");
  }

  
  toggleTopic(topic:any){
    console.log("In Toggle Topic");
  }
  clearFilters(){
    this.topics.forEach(topic => topic.selected = false);  // Uncheck all checkboxes
    this.countSelected();  // Update the selected count
  }
}
