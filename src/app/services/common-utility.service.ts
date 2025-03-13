import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilityService {

  constructor() { }

  isAll_Agnent: boolean = true;
  isProduct_support_agent: boolean = false;
  isIT_Support_Agent: boolean = false;
  isDevelopment_Support_Agnent: boolean = false;
  isBilling_Support_Agent: boolean = false;

  private metricArraySource = new BehaviorSubject<any[]>([]);
  metricArray$ = this.metricArraySource.asObservable();

  setMetricArray(newArray: any[]) {
    this.metricArraySource.next(newArray);
  }

  
}
