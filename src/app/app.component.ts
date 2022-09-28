import { Component, OnInit } from '@angular/core';

import { empInfo } from './common/ieModule'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular -app';
  empLocation = empInfo.empLocation;


  constructor() {

  }





}
