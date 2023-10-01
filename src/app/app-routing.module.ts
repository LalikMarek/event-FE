import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EventComponent} from "./event/event.component";

const routes: Routes = [
    {
        path: 'events',
        component: EventComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }