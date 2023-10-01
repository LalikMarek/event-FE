import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EventResponse} from "../../common/model/event.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  @Input()
  events?: EventResponse;

  @Output()
  eventToUpdate = new EventEmitter<number>();

  @Output()
  eventToDelete = new EventEmitter<number>();

  private defaultPageNumber = 0;

  private defaultTotalElements = 10;

  private defaultPageSize = 10;

  private defaultFilter = '';

  filterForm = new FormGroup({
    name: new FormControl()
  });

  updateEvent(eventId: number): void{
    this.eventToUpdate.emit(eventId);
  }

  deleteEvent(eventId: number): void{
    this.eventToDelete.emit(eventId);
  }

}
