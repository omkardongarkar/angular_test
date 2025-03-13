import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

interface User {
  name: string
  role: string
  agents: string[]
  dateAdded: Date
}
interface Agent {
  agent: string
  date: Date
  users: number
  interactions : number
  keys:string
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [CommonModule,FormsModule],
})
export class SettingsComponent implements OnInit {
  activeTab: string = 'users'; 
  isAddUserPanelVisible: boolean = false;
  userName: string = "Jane Doe";
  userEmail: string = "jane.doe@example.com";
  userRole: string = "Product Manager";
  selectedAgent: string = "Product Support Agent";
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  openAddUserPanel() {
    this.isAddUserPanelVisible = true;
    this.disableTable(); 
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  roleOptions: { value: string; label: string }[] = [
    { value: 'Product Manager', label: 'Product Manager' },
    { value: 'Cross BU Manager', label: 'Cross BU Manager' },
    { value: 'Admin', label: 'Admin' },
    // ... more roles
  ];
  closeAddUserPanel() {
    this.isAddUserPanelVisible = false;
    this.enableTable(); // Call enableTable when closing the panel

  }
  addUser(): void {
    console.log("User Added");
    this.isAddUserPanelVisible = false;  
    this.enableTable(); // Call enableTable when closing the panel

  }
  private disableTable() {
    const table = this.el.nativeElement.querySelector('#userTable'); // Get the table element
    if (table) {
      this.renderer.addClass(table, 'table-disabled'); // Use Renderer2 to add the class
    }
  }

  private enableTable() {
    const table = this.el.nativeElement.querySelector('#userTable'); // Get the table element
    if (table) {
      this.renderer.removeClass(table, 'table-disabled'); // Use Renderer2 to remove the class
    }
  }
  users: User[] = [
    {
      name: 'Olivia Martinez',
      role: 'Admin',
      agents: ['All Agents'],
      dateAdded: new Date('2024-07-13'),
    },
    {
      name: 'Ethan Rodriguez',
      role: 'Cross BU Manager',
      agents: ['All Agents'],
      dateAdded: new Date('2024-07-13'),
    },
    {
      name: 'Sophia Carter',
      role: 'Cross BU Manager',
      agents: ['Product Support Agent', 'Billing Support Agent'],
      dateAdded: new Date('2024-07-13'),
    },
    {
      name: 'Liam Thompson',
      role: 'Product Manager',
      agents: ['Product Support Agent'],
      dateAdded: new Date('2024-07-13'),
    },
    {
      name: 'Noah Wilson',
      role: 'Product Manager',
      agents: ['IT Support Agent'],
      dateAdded: new Date('2024-07-13'),
    },
    {
      name: 'Ava Brown',
      role: 'Product Manager',
      agents: ['Billing Support Agent'],
      dateAdded: new Date('2024-07-13'),
    },
    {
      name: 'Mason Davis',
      role: 'Product Manager',
      agents: ['Developer Support Agent'],
      dateAdded: new Date('2024-07-13'),
    },
    {
      name: 'Isabella Garcia',
      role: 'Product Manager',
      agents: ['Developer Support Agent'],
      dateAdded: new Date('2024-07-13'),
    },
  ]
  agents: Agent[] = [
    {
     agent:'Product Support Agent',
     date:new Date('2024-07-13'),
     users:3244,
     interactions:4357,
     keys:'View ChatSee Keys'
    },
    {
      agent:'IT Support Agent',
      date:new Date('2024-07-13'),
      users:3244,
      interactions:4357,
      keys:'View ChatSee Keys'
     },
     {
      agent:'Billing Support Agent',
      date:new Date('2024-07-13'),
      users:3244,
      interactions:4357,
      keys:'View ChatSee Keys'
     },
     {
      agent:'Developer Support Agent',
      date:new Date('2024-07-13'),
      users:3244,
      interactions:4357,
      keys:'View ChatSee Keys'
     },
     {
      agent:'Developer Support Agent',
      date:new Date('2024-07-13'),
      users:3244,
      interactions:4357,
      keys:'View ChatSee Keys'
     },
  ]


  ngOnInit(): void {}
}
