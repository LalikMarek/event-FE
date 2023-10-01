import { Component } from '@angular/core';

export enum Menu {
  EVENTS = 'EVENTS',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu = Menu;
  actualMenu = Menu.EVENTS;

  changeMenu(menuItem: Menu): void {
    this.actualMenu = menuItem;
  }
}
