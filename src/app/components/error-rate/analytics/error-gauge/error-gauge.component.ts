import { AfterViewInit, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-error-gauge',
  templateUrl: './error-gauge.component.html',
  styleUrls: ['./error-gauge.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ErrorGaugeComponent implements AfterViewInit {
  @Input() value: number = 0;
  @Input() status: 'optimal' | 'moderate' | 'critical' = 'optimal';

  segments = Array.from({ length: 24 });
  activeSegments: any[] = []; // Initialize as empty array

  ngAfterViewInit() {
    this.updateActiveSegments(); // Call after view init to get correct number of segments
  }

  ngOnChanges() {
    this.updateActiveSegments(); // Update on value change
  }

  updateActiveSegments() {
    this.activeSegments = this.segments.slice(0, Math.round((this.value / 100) * this.segments.length));
  }

  get statusColor() {
    const colors = {
      optimal: '#16a34a',
      moderate: '#d97706',
      critical: '#dc2626',
    };
    return colors[this.status];
  }


  getSegmentPath(index: number, totalSegments: number): string {
    const startAngle = -180; // Start at -90 degrees (left)
    const endAngle = 0;   // End at 90 degrees (right)
  
    const segmentAngle = (endAngle - startAngle) / totalSegments;
  
    const currentStartAngle = startAngle + index * segmentAngle;
    const currentEndAngle = currentStartAngle + segmentAngle;
  
    const radius = 70;
    const centerX = 100;
    const centerY = 100;
  
    const startX = centerX + radius * Math.cos((currentStartAngle * Math.PI) / 180);
    const startY = centerY + radius * Math.sin((currentStartAngle * Math.PI) / 180);
  
    const endX = centerX + radius * Math.cos((currentEndAngle * Math.PI) / 180);
    const endY = centerY + radius * Math.sin((currentEndAngle * Math.PI) / 180);
  
    return `M ${startX},${startY} A ${radius},${radius} 0 0,1 ${endX},${endY}`;
  }
}