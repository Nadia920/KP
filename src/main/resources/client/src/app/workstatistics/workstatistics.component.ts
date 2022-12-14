import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WorkStatistics } from '../models/workstatistics.model';
import { WorkStatisticsService } from './workstatistics.service';


@Component({
  selector: 'app-worktatistics',
  templateUrl: './workstatistics.component.html'
})
export class WorkStatisticsComponent implements OnInit{

   worksStatistics: WorkStatistics[] = [];

  constructor(private router: Router, private workStatisticsService: WorkStatisticsService) {

    }

    ngOnInit() { };

    delete(workStatistics: WorkStatistics): void {
      this.workStatisticsService.delete(workStatistics)
        .subscribe( data => {
          this.worksStatistics = this.worksStatistics.filter(w => w !== workStatistics);
        })
    };


}
