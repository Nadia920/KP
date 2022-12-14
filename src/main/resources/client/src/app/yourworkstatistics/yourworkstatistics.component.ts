import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WorkStatistics } from '../models/workstatistics.model';
import { WorkStatisticsService } from '../workstatistics/workstatistics.service';

@Component({
  selector: 'app-worktatistics',
  templateUrl: './yourworkstatistics.component.html'
})
export class YourWorkStatisticsComponent implements OnInit{

   worksStatistics: WorkStatistics[] = [];

  constructor(private router: Router, private workStatisticsService: WorkStatisticsService) {

    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  delete(worksStatistics: WorkStatistics){

  }

}
