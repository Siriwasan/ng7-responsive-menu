import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  navOpened = true;
  navOver = 'side';
  watcher: Subscription;

  constructor(media: MediaObserver) {
    this.watcher = media.asObservable().subscribe((change: MediaChange[]) => {
      if (change[0].mqAlias === 'sm' || change[0].mqAlias === 'xs') {
        this.navOpened = false;
        this.navOver = 'over';
      } else {
        this.navOpened = true;
        this.navOver = 'side';
      }
    });
  }
}
