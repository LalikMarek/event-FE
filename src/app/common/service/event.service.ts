import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pagination} from "../model/pagination.model";
import {EventResponse} from "../model/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private url = 'localhost:8080/api/events'

  constructor(private http: HttpClient) {}
  
  getEvents(pagination: Pagination = {page: 0, size: 10, filter: {name: ''}}): Observable<EventResponse>{
    const params = new HttpParams().appendAll({
      name: pagination.filter.name,
      page: pagination.page,
      size: pagination.size
    })

    return this.http.get<EventResponse>(this.url, {params});
  }

  // updateEvent(event: Event): Observable<Event> {
  //   return this.http.put<Event>(`${this.url}/${event.id}`, event);
  // }

  deleteEvent(eventId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${eventId}`);
  }
  
}
