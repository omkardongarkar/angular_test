import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-product-support-dropdown",
  templateUrl: "./product-support-dropdown.component.html",
  styleUrls: ["./product-support-dropdown.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class ProductSupportDropdownComponent {
  @Input() options: string[] = [
    "Product Support Agent",
    "Sales Representative",
    "Customer Service",
    "Technical Support",
  ];
  @Input() selectedOption: string = "Product Support Agent";
  @Output() selectionChange = new EventEmitter<string>();

  isOpen = false;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.selectionChange.emit(option);
    this.isOpen = false;
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === "Enter" || event.key === " ") {
      this.toggleDropdown();
      event.preventDefault();
    } else if (event.key === "Escape" && this.isOpen) {
      this.isOpen = false;
      event.preventDefault();
    }
  }
}
