import { Component } from '@angular/core';
import * as L from 'leaflet';

export interface Job {
  id: string;
  coordinates: L.LatLngExpression;
  logo: string;
  company: string;
  city: string;
  dates: string;
  tasks: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public euMap: L.Map;
  public usaMap: L.Map;

  public jobs: Job[] = [
    {
      id: 'telent',
      coordinates: [48.94, 9.42],
      logo: '../assets/logo_rm_telent.jpg',
      company: 'Software Engineer - telent GmbH',
      city: 'Backnang, Germany',
      dates: 'June 2018 - present',
      tasks: [
        'Refactoring application to replace Bootstrap with Angular Material',
        'Designed IoT sensor provisioning GUI with Angular Material',
        'Wrote data decoders in vanilla JavaScript with corresponding test suites',
        'Tools: git, Angular 8, rxjs, JavaScript, TypeScript, Bootstrap, Angular Material, SCSS, Jasmine'
      ]
    },
    {
      id: 'diconium',
      coordinates: [48.813, 9.212],
      logo: '../assets/diconium.png',
      company: 'Junior Software Engineer - Diconium Digital Solutions GmbH (Stuttgart, Germany)',
      city: 'Stuttgart, Germany',
      dates: 'June 2017 - June 2018',
      tasks: [
        'HTML and CSS templating and JQuery form validation for e-commerce shop',
        'Creation of Angular user dashboard for insurance company',
        'AnguarJS to Angular 4 migration for global automotive website',
        'Tools: JavaScript, TypeSript, Angular (1 through 8), jQuery, npm, git, Karma, Jest'
      ]
    },
    {
      id: 'homeoffice',
      coordinates: [48.93, 9.477],
      logo: '../assets/home.png',
      company: 'Freelance Fullstack Developer - Independent',
      city: 'Weissach im Tal, Germany',
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
      id: 'gogo',
      coordinates: [41.8, -87.6],
      logo: '../assets/Gogo.jpg',
      company: 'RF Engineering Software Tools - Gogo LLC',
      city: 'Chicago, USA',
      dates: 'June 2016 - Aug 2016',
      tasks: [
        'Designed C program to optimize flight simulator accuracy and satellite usage',
        'Wrote KML script to airports and daylight saving times in Google Earth'
      ]
    },
    {
      id: 'northrop',
      coordinates: [42.08, -88.015],
      logo: '../assets/northrop.png',
      company: 'IT Techincal Intern - Northrop Grumman',
      city: 'Rolling Meadows, USA',
      dates: 'June 2015 - Aug 2015',
      tasks: [
        'Customized Excel VBA application to apply HTML formatting to Outlook emails',
        'Performed program installations and machine decommissions'
      ]
    }
  ];

  onStepChange(step: any): void {
    if (step.selectedStep.label === 'work') {
      this.buildMaps();
    }
    if (step.previouslySelectedIndex.label === 'work') {
      this.euMap.remove();
      this.usaMap.remove();
    }
  }

  public buildMaps(): void {

    const euMapContainer = L.DomUtil.get('euMap');
    const usaMapContainer = L.DomUtil.get('usaMap');

    if (euMapContainer != null) {
      (euMapContainer as any)._leaflet_id = null;
    }

    if (usaMapContainer != null) {
      (usaMapContainer as any)._leaflet_id = null;
    }

    const euMap = L.map('euMap', {
      center: [48.9, 9.4],
      zoom: 10,
      zoomControl: false,
      attributionControl: false,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
      ]
    });

    const usaMap = L.map('usaMap', {
      center: [42, -87.6],
      zoom: 8,
      zoomControl: false,
      attributionControl: false,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
      ]
    });

    this.jobs.forEach((job: Job) => {
      L.marker(job.coordinates)
        .addTo(euMap)
        .bindPopup(this.renderPopupHtml(job));
    });

    this.internships.forEach((int: Job) => {
      L.marker(int.coordinates)
        .addTo(usaMap)
        .bindPopup(this.renderPopupHtml(int));
    });
  }

  public renderPopupHtml(job: Job): string {
    const tasks = job.tasks.map((task) => `<div>+ ${task}</div>`).join('');
    return `
      <div style="display:flex;align-items:center;">
        <img style="height:50px;margin-right:0.5rem;" src="${job.logo}">
        <h3>${job.company}</h3>
      </div>
      <div>${job.city}</div>
      <strong>${job.dates}</strong>
      <hr style="margin:7px;">
      ${tasks}
    `;
  }
}
