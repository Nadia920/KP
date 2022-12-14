import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { WorkStatistics } from '../models/workstatistics.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class YourWorkStatisticsService {

  constructor(private http:HttpClient) {}

  private yourWorkStatisticsUrl = 'http://localhost:8080/workstatistics/api';

  public get() {
    return this.http.get(this.yourWorkStatisticsUrl);
  }

  public delete(yourWorkStatistics:WorkStatistics) {
    return this.http.delete(this.yourWorkStatisticsUrl + "/"+ yourWorkStatistics.id);
  }

  public add(yourWorkStatistics:WorkStatistics) {
    return this.http.post(this.yourWorkStatisticsUrl, yourWorkStatistics);
  }

}
