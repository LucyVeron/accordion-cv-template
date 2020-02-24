import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  folders: any[] = [
    {
      name: 'Software Engineer - telent GmbH',
      dates: 'June 2018 - present',
    },
    {
      name: 'Junior Software Engineer - diconium GmbH',
      dates: 'June 2017 - June 2018',
    },
    {
      name: 'Freelance Fullstack Developer',
      dates: 'Jan 2017 - Mar 2018',
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
