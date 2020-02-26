import { Component } from '@angular/core';

export interface Job {
  logo: string;
  company: string;
  dates: string;
  tasks: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public jobs: Job[] = [
    {
      logo: '../assets/logo_rm_telent.jpg',
      company: 'Software Engineer - telent GmbH (Backnang, Germany)',
      dates: 'June 2018 - present',
      tasks: [
        'Developing management platform for IoT sensors',
        'Using Agile methodology',
        'Tools: git, Angular 8, rxjs, Typescript, Bootstrap, Angular Material, SCSS'
      ]
    },
    {
      logo: '../assets/diconium.png',
      company: 'Junior Software Engineer - Diconium Digital Solutions GmbH (Stuttgart, Germany)',
      dates: 'June 2017 - June 2018',
      tasks: [
        'HTML and CSS templating and JQuery form validation for e-commerce shop',
        'Creation of Angular 4 dashboard for insurance company',
        'Design, implementation and testing for global automotive brand',
        'Tools: Typescript, Angular (1 through 8), jQuery, npm, git, Karma, Jest'
      ]
    },
    {
      logo: '../assets/home.png',
      company: 'Freelance Fullstack Developer - Independent (Backnang, Germany)',
      dates: 'Dec 2016 - Mar 2017',
      tasks: [
        'Built website for Chicago music group',
        'Hosted on Godaddy Linux server',
        'Tools: Flask, Jinja2, Apache, HTML, CSS'
      ]
    }
  ];

  public internships: Job[] = [
    {
      logo: '../assets/Gogo.jpg',
      company: 'RF Engineering Software Tools - Gogo LLC (Chicago, USA)',
      dates: 'June 2016 - Aug 2016',
      tasks: [
        'Designed C program to optimize flight simulator accuracy and satellite usage',
        'Wrote KML script to airports and daylight saving times in Google Earth'
      ]
    },
    {
      logo: '../assets/northrop.png',
      company: 'IT Techincal Intern - Northrop Grumman (Rolling Meadows, USA)',
      dates: 'June 2015 - Aug 2015',
      tasks: [
        'Customized Excel VBA application to apply HTML formatting to Outlook emails',
        'Performed program installations and machine decommissions'
      ]
    }
  ];
}
