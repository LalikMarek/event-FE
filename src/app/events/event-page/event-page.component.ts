import { Component } from '@angular/core';
import {Event, EventResponse} from "../../common/model/event.model";
import {ToastService} from "angular-toastify";
import {EventService} from "../../common/service/event.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent {
  events?: EventResponse;

  constructor(private service: EventService,
              private toastService: ToastService,
              private router: Router,
              private modalService: NgbModal) {
    this.getEvents();
  }

  getEvents(): void {
    this.service.getEvents().pipe(untilDestroyed(this)).subscribe((events: EventResponse) => {
      this.events = events;
    });
  }

  selectEventToUpdate(eventId: number): void {
    this.router.navigate(['user', eventId]);
  }

  deleteEvent(eventId: number): void {
    if (window.confirm('Naozaj chcete vymazať osobu?')) {
      this.service.deleteEvent(eventId).pipe(untilDestroyed(this)).subscribe(() => {
        this.toastService.success('Osoba bola úspešne zmazaná.');
        this.getEvents();
      }, () => {
        this.toastService.error('Chyba. Osoba nebola zmazaná.');
      })
    }
  }
}
