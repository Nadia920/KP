import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MethodOfMotivationInvolved } from '../models/methodofmotivationinvolved.model';
import { MethodOfMotivationInvolvedService } from '../methodsofmotivation/methodsofmotivationinvolved.service';
import { EventService } from './event.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit{
  events: Event[] = Array();

  constructor(private router: Router, private eventService: EventService) {

   }

  ngOnInit() {
      this.eventService.get()
        .subscribe( data => {
          this.events = <Array<Event>>data;
        });
    };

    delete(event: Event): void {
      this.eventService.delete(event)
        .subscribe( data => {
          this.events = this.events.filter(e => e !== event);
        })
    };

}
