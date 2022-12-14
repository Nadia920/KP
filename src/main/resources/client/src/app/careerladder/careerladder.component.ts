import { Component, OnInit } from '@angular/core';
import { CareerLadder } from '../models/careerladder.model';
import { CareerLadderService } from '../careerladder/careerladder.service';

// добавьте к этому сервис
@Component({
  selector: 'app-careerladder',
  templateUrl: './careerladder.component.html',
  styleUrls: ['./careerladder.component.scss']
})
export class CareerLadderComponent implements OnInit{
     careerLadders: CareerLadder[] = Array();

     constructor(private careerLadderService: CareerLadderService) {

       }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
