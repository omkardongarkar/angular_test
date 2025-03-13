import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxEchartsModule } from "ngx-echarts";
import { ScatterChartComponent } from "./scatter-chart.component";
@Component({
  selector: "property-1-group",
  templateUrl: "./property-1-group.component.html",
  styleUrls: ["./property-1-group.component.scss"],
  standalone: true,
  imports: [CommonModule, NgxEchartsModule,ScatterChartComponent],
})
export class Property1GroupComponent implements OnInit {
  showSummary = false;

  ngOnInit() {
  }

  
  onChartClick() {
    console.log(this.showSummary);
    this.showSummary = !this.showSummary;
    console.log(this.showSummary);
  }
}
