import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-queries',
  standalone: true,
  imports: [    CommonModule,
    FormsModule],
  templateUrl: './top-queries.component.html',
  styleUrl: './top-queries.component.scss'
})
export class TopQueriesComponent{  
  @ViewChild('supportTicketsChart') supportTicketsChart!: ElementRef;

  Query : any = [
    {
      "name": "Product price reduction",
      "agent": "Product Support Agent",
      "resolutionRate": "65.4%"
    },
    {
      "name": "Password reset",
      "agent": "IT Support Agent",
      "resolutionRate": "74.6%"
    },
    {
      "name": "Return policy information",
      "agent": "Product Support Agent",
      "resolutionRate": "58.9%"
    },
    {
      "name": "Delivery status",
      "agent": "Product Support Agent",
      "resolutionRate": "72.1%"
    },
    {
      "name": "Product recommendations",
      "agent": "Billing Support Agent",
      "resolutionRate": "68.2%"
    },
    {
      "name": "Software installation issue",
      "agent": "IT Support Agent",
      "resolutionRate": "53.7%"
    },
    {
      "name": "Competitor price matching",
      "agent": "Billing Support Agent",
      "resolutionRate": "77.5%"
    },
    {
      "name": "VPN setup guidance",
      "agent": "IT Support Agent",
      "resolutionRate": "62.8%"
    },
    {
      "name": "Warranty details",
      "agent": "Product Support Agent",
      "resolutionRate": "59.3%"
    },
    {
      "name": "Refund status inquiry",
      "agent": "Product Support Agent",
      "resolutionRate": "70.0%"
    }
  ]  
}
