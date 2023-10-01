import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  form: FormGroup;
  events: Array<Event> = [];

  constructor() {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }

  saveEvent(): void {
    this.events.push(this.form.value);
    this.form.reset();
  }

  editEvent(index: number):void {
    this.form.setValue(this.events[index]);
    this.deleteEvent(index);
  }

  deleteEvent(index: number):void{
    this.events.splice(index,1);
  }
}
