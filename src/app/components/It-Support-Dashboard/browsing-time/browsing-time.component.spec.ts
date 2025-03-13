import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowsingTimeComponent } from './browsing-time.component'
import { ElementRef } from '@angular/core'

describe('BrowsingTimeComponent', () => {
  let component: BrowsingTimeComponent
  let fixture: ComponentFixture<BrowsingTimeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowsingTimeComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(BrowsingTimeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have four cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('.card')
    expect(cards.length).toBe(4)
  })

  it('should have correct titles for each card', () => {
    const titles = fixture.nativeElement.querySelectorAll('.title')
    expect(titles[0].textContent).toContain('Daily Average Time Spent Browsing Before Purchase')
    expect(titles[1].textContent).toContain('Factors Contributing to Time Spent Browsing')
    expect(titles[2].textContent).toContain("Weekly Assessment of ChatAgent's Performance")
    expect(titles[3].textContent).toContain('Weekly Review of Additional Support')
  })

  it('should have a bar chart in the first card', () => {
    const barChart = fixture.nativeElement.querySelector('.bars')
    expect(barChart).toBeTruthy()
  })

  it('should have a pie chart in the second card', () => {
    const pieChartContainer = fixture.nativeElement.querySelector('.pie-chart-container')
    expect(pieChartContainer).toBeTruthy()
  })

  it('should have assessment items in the third card', () => {
    const assessmentItems = fixture.nativeElement.querySelectorAll('.assessment-item')
    expect(assessmentItems.length).toBe(5)
  })

  it('should have review items in the fourth card', () => {
    const reviewItems = fixture.nativeElement.querySelectorAll('.review-item')
    expect(reviewItems.length).toBe(5)
  })

  it('should create pie chart after view init', () => {
    spyOn(component, 'createPieChart')
    component.ngAfterViewInit()
    expect(component.createPieChart).toHaveBeenCalled()
  })
})
