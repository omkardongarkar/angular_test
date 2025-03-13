export interface ChartData {
  date: string
  count: number
}

export interface TableData {
  date: string
  category: string
  categoryClass: string
  inquiries: string
  conversions: string
  success: string
}

export interface AssessmentMetric {
  title: string
  description: string
}

export interface ImprovementSuggestion {
  title: string
  description: string
  example: string
}
