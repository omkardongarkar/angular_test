import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AnalyticsResponse, TableData } from './user-geo.types';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private apiUrl = 'api/analytics';

  constructor() {}

  getAnalyticsData(): Observable<AnalyticsResponse> {
    return new Observable<AnalyticsResponse>((observer) => {
      fetch(this.apiUrl)
        .then((response) => response.json())
        .then((data) => {
          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  exportToCSV(data: TableData[]): void {
    const headers = ['Users', 'Retention', 'Conversations'];
    const csvData = data.map((row) => [row.users, row.retention, row.conversations].join(','));

    const csv = [headers.join(','), ...csvData].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'analytics_export.csv';
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
