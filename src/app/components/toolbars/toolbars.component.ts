import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {UpdateComponentService} from "../../services/update-component.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-toolbars',
  templateUrl: './toolbars.component.html',
  styleUrls: ['./toolbars.component.scss']
})
export class ToolbarsComponent implements OnInit, OnDestroy{

  pageTitle: string;
  currentRoute: string;
  pageTitleSubscribtion: Subscription;

  constructor(
    private router: Router,
    private updateComponentService: UpdateComponentService
  ) { }

  ngOnInit() {
    this.pageTitleSubscribtion = this.updateComponentService.getData().subscribe(data => {
        this.pageTitle = data;
      }
    )

    this.router.events.subscribe((event:NavigationEnd) => {
      if(event instanceof NavigationEnd) {
        return this.currentRoute = event.url;
      }
    })
  }

  // Super simple action. Just for this super small, two-routes application.
  goBack() {
      this.router.navigateByUrl('/gallery');
    }

  ngOnDestroy() {
    this.pageTitleSubscribtion.unsubscribe();
  }

}
