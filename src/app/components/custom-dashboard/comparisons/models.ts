// Bar chart data model
export interface BarChartData {
  labels: string[]
  values: number[]
}

// Pie chart data model
export interface PieChartItem {
  label: string
  value: number
  color: string
}

// Performance metrics model
export interface Metric {
  label: string
  value: string
}

// Improvement suggestion model
export interface Improvement {
  label: string
  value: string
  example: string
}
