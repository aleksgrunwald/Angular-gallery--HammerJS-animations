import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {enterImageDetailsPage} from '../../route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    enterImageDetailsPage,
  ]
})
export class AppComponent {


  constructor() { }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
