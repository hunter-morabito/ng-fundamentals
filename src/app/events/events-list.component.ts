import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event] ="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit{
  events:any[]
  /* short hand for declaring and setting a variable */
  constructor(private eventService: EventService){
  }

  /* Lifecycle hook */
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
