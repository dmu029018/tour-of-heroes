import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Tour of Heroes';
  time;

  elements: string[] = [
    "fire",
    "water",
    "air",
    "earth"
  ]

  constructor() {
    console.log('app constructor');
    this.time = moment();
    

  }
}
