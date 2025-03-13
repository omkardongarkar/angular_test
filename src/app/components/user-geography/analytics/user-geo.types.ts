export interface MetricData {
  title: string
  value: string
  trend: 'up' | 'down'
  percentage: string
}

export interface LocationData {
  name: string
  users: number
  retention: number
  conversations: number
  color: string
}

export interface TableData {
  users: number
  retention: number
  conversations: number
  details: string
}

export interface AnalyticsResponse {
  metrics: MetricData[]
  locations: LocationData[]
  tableData: TableData[]
}
interface Location {
  name: string;
  icon: string;
  progress: number;
}

interface Metric {
  users: number;
  userIcon: string;
  change: number;
  changeIcon: string;
  retention: number;
  conversations: number;
  convChange: number;
  convChangeIcon: string;
}