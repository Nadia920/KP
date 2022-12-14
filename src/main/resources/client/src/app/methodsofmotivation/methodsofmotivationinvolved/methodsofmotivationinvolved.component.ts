import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MethodOfMotivationInvolved} from '../../models/methodofmotivationinvolved.model';
import { MethodOfMotivationInvolvedService } from '../methodsofmotivationinvolved.service';

@Component({
  selector: 'app-methodofmotivationinvolved',
  templateUrl: '../methodsofmotivationinvolved/methodsofmotivationinvolved.component.html',
  styleUrls: ['./methodsofmotivationinvolved.component.scss']
})
export class MethodsOfMotivationInvolvedComponent implements OnInit{

  methodsOfMotivationInvolved: MethodOfMotivationInvolved[] = Array();

  constructor(private methodsOfMotivationInvolvedService: MethodOfMotivationInvolvedService) {

    }

  ngOnInit() {
      this.methodsOfMotivationInvolvedService.get()
        .subscribe( data => {
          this.methodsOfMotivationInvolved = <Array<MethodOfMotivationInvolved>>data;
        });
    };

    delete(methodOfMotivationInvolved: MethodOfMotivationInvolved): void {
      this.methodsOfMotivationInvolvedService.delete(methodOfMotivationInvolved)
        .subscribe( data => {
          this.methodsOfMotivationInvolved = this.methodsOfMotivationInvolved.filter(m => m !== methodOfMotivationInvolved);
        })
    };


}
