import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'

interface TableRow {
  userQuery: string;
  userSentiment: string;
  userEmotion: string;
  userFeedback: string;
  date: string;
  user: string;
  // Add other properties as needed
}

// interface TableRow {
//   users: { count: number; trend: number }
//   retention: number
//   conversations: { count: number; trend: number }
// }
@Component({
  selector: 'app-user-query-insights',
  templateUrl: './User-actions.component.html',
  styleUrls: ['./User-actions.component.scss'],
  standalone: true,
  imports:[CommonModule]
})
export class UserQueryInsightsComponent implements OnInit {
  constructor() {}
data:any
  ngOnInit(): void {
    this.data = this.tableData;
    console.log('table data is ',this.tableData);
  }
  tableData: TableRow[] = [
    { userQuery:"The User wants to get assestance with the software", userSentiment: 'Negative', userEmotion:'Frustration', userFeedback:'No User Feedback',date:'Dec 23, 2024',user:'97b54ss221sd' },
    { userQuery:"The User wants to get assestance with the software", userSentiment: 'Negative', userEmotion:'Frustration', userFeedback:'No User Feedback',date:'Dec 23, 2024',user:'97b54ss221sd' },
    { userQuery:"The User wants to get assestance with the software", userSentiment: 'Negative', userEmotion:'Frustration', userFeedback:'No User Feedback',date:'Dec 23, 2024',user:'97b54ss221sd' },
    { userQuery:"The User wants to get assestance with the software", userSentiment: 'Negative', userEmotion:'Frustration', userFeedback:'No User Feedback',date:'Dec 23, 2024',user:'97b54ss221sd' },
    { userQuery:"The User wants to get assestance with the software", userSentiment: 'Negative', userEmotion:'Frustration', userFeedback:'No User Feedback',date:'Dec 23, 2024',user:'97b54ss221sd' },
    { userQuery:"The User wants to get assestance with the software", userSentiment: 'Negative', userEmotion:'Frustration', userFeedback:'No User Feedback',date:'Dec 23, 2024',user:'97b54ss221sd' },
    { userQuery:"The User wants to get assestance with the software", userSentiment: 'Negative', userEmotion:'Frustration', userFeedback:'No User Feedback',date:'Dec 23, 2024',user:'97b54ss221sd' },
    { userQuery:"The User wants to get assestance with the software", userSentiment: 'Negative', userEmotion:'Frustration', userFeedback:'No User Feedback',date:'Dec 23, 2024',user:'97b54ss221sd' },
 
  ]
  

  // tableData: TableRow[] = [
  //   {userQuery:"The User wants to", userSentiment: 'Negative', userEmotion:'Frustration', userFeedback:'No User Feedback',date:'07-02-2025',user:'97b54ss221sd' },
  //   // { users: { count: 12, trend: 20 }, retention: 30, conversations: { count: 19, trend: 15 } },
  //   // { users: { count: 56, trend: 15 }, retention: 25, conversations: { count: 52, trend: 10 } },
  //   // { users: { count: 73, trend: 28 }, retention: 27, conversations: { count: 15, trend: 13 } },
  //   // { users: { count: 18, trend: 22 }, retention: 20, conversations: { count: 41, trend: 12 } },
  //   // { users: { count: 65, trend: 25 }, retention: 23, conversations: { count: 38, trend: 18 } },
  //   // { users: { count: 29, trend: 17 }, retention: 26, conversations: { count: 60, trend: 14 } },
  //   // { users: { count: 84, trend: 21 }, retention: 22, conversations: { count: 25, trend: 16 } },
  //   // { users: { count: 91, trend: 24 }, retention: 24, conversations: { count: 44, trend: 11 } },
  // ]

  exportCsv(): void {
    // Implementation for CSV export
  }
}
