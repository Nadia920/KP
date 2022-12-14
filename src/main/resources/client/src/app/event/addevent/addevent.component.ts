import { Component } from '@angular/core';
import { Event } from '../../models/event.model';
@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss']
})
export class AddEventComponent {

  event!: Event;
 create(event: Event) {
 }
}
