import {RouterModule, Routes} from "@angular/router";
import {EventPageComponent} from "./events/event-page/event-page.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {
        path: 'events',
        component: EventPageComponent,
    },
    // {
    //     path: 'event/:eventId',
    //     component: EventDetailPageComponent,
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }