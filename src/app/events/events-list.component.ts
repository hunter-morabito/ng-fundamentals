import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IEvent } from './shared/index';

/* Lets ts know toastr is in scope through angular.json */
// regaining control
@Component({
  template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event] ="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  /* short hand for declaring and setting a variable */
  constructor(private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
  }

  /* Lifecycle hook */
  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
