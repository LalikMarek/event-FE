import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventPageComponent } from './events/event-page/event-page.component';
import {EventService} from "./common/service/event.service";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularToastifyModule, ToastService} from 'angular-toastify';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventListComponent } from './events/event-list/event-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    EventListComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        AngularToastifyModule,
        NgbModule
    ],
  providers: [
      EventService,
      ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
