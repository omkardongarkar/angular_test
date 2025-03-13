import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonUtilityService } from '../../../services/common-utility.service';
import { ProductSupportDropdownComponent } from "../../dropdown/product-support-dropdown.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ProductSupportDropdownComponent],
})
export class NavigationComponent implements OnInit {
  @ViewChild('dropdown') dropdown!: ElementRef; // Reference to the dropdown element

  @Output() sidebarStateChanged = new EventEmitter<boolean>();

  selectedPage: string = '/'; // Track the selected page
  currentRoute: string = '';
  isCollapsed = false;
  isOpen = false; // Controls whether dropdown is open or closed

  agents = [
    {
      id: 1,
      name: 'All Agent',
    },
    {
      id: 2,
      name: 'Product Support Agent',
    },
    {
      id: 3,
      name: 'IT Support Agent',
    },
    {
      id: 4,
      name: 'Development Support Agent',
    },
    {
      id: 5,
      name: 'Development Support Agent',
    },
    {
      id: 6,
      name: 'Billing Support Agent',
    }
  ];
  selectedAgent = this.agents[0];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private CommonUtility: CommonUtilityService) {

    this.currentRoute = this.router.url; // Automatically update on route change
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log("this.router.url ", this.router.url);

        this.currentRoute = this.router.url; // Automatically update on route change
      }
    });
  }

  // Add event listener when component loads
  ngOnInit() {
    document.addEventListener('click', this.handleClickOutside);
    this.sidebarStateChanged.emit(this.isCollapsed); // Emit state to parent
  }

  // Toggle the dropdown on click
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  // Handle clicks outside the dropdown
  handleClickOutside = (event: MouseEvent) => {
    // If dropdown is open and the clicked element is NOT inside the dropdown, close it
    if (this.dropdown && !this.dropdown.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  };

  // Select the clicked agent and close the dropdown
  selectAgent(agent: any) {
    this.CommonUtility.isAll_Agnent = false;
    this.CommonUtility.isProduct_support_agent = false;
    this.CommonUtility.isIT_Support_Agent = false;
    this.CommonUtility.isDevelopment_Support_Agnent = false;
    this.CommonUtility.isBilling_Support_Agent = false;

    this.selectedAgent = agent;

    switch (this.selectedAgent.name) {
      case 'All Agnent':
        this.CommonUtility.isAll_Agnent = true;
        break;
      case 'Product Support Agent':
        this.CommonUtility.isProduct_support_agent = true;
        break;
      case 'IT Support Agent':
        this.CommonUtility.isIT_Support_Agent = true;
        break;
      case 'Development Support Agnent':
        this.CommonUtility.isDevelopment_Support_Agnent = true;
        break;
      case 'Billing Support Agent':
        this.CommonUtility.isBilling_Support_Agent = true;
        break;

      default:
      // this.Avg_Resolution_Time = true;
    }

    this.CommonUtility.metricArray$.subscribe(metricArray => {
      if (metricArray.length > 0) {
        const firstMetric = metricArray.shift();
        metricArray.push(firstMetric!);
        this.CommonUtility.setMetricArray(metricArray);
      }
    });

    this.isOpen = false;
  }


  toggleSidebar(isClosing: boolean): void {
    this.isCollapsed = isClosing;
    this.sidebarStateChanged.emit(this.isCollapsed); // Emit state to parent
  }


  // Log out and navigate to the homepage
  logout(): void {
    this.router.navigate(['']);

    //clear User data from localstorage
    localStorage.clear();
  }

  // Set the selected page when a nav item is clicked
  selectPage(page: string): void {
    this.selectedPage = page;
    this.router.navigate([page]);
  }

  // Clean up the event listener to prevent memory leaks
  ngOnDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
