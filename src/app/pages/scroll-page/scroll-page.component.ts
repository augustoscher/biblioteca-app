import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {PerfectScrollbarComponent, PerfectScrollbarDirective} from 'ngx-perfect-scrollbar';
import {routerAnimation} from '../../utils/page.animation';

@Component({
  selector: 'app-scroll-page',
  templateUrl: './scroll-page.component.html',
  styleUrls: ['./scroll-page.component.scss'],
  animations: [routerAnimation]
})
export class ScrollPageComponent implements OnInit {
  // Add router animation
  @HostBinding('@routerAnimation') routerAnimation = true;
  @ViewChild(PerfectScrollbarComponent) componentScroll;
  @ViewChild(PerfectScrollbarDirective) directiveScroll;

  constructor() {
  }

  onScrollToXY(x: number, y: number) {
    this.componentScroll.scrollTo(x, y);
    this.directiveScroll.scrollTo(x, y);
  }

  onScrollToTop() {
    this.componentScroll.scrollToTop();
    this.directiveScroll.scrollToTop();
  }

  onScrollToLeft() {
    this.componentScroll.scrollToLeft();
    this.directiveScroll.scrollToLeft();
  }

  onScrollToRight() {
    this.componentScroll.scrollToRight();
    this.directiveScroll.scrollToRight();
  }

  onScrollToBottom() {
    this.componentScroll.scrollToBottom();
    this.directiveScroll.scrollToBottom();
  }

  ngOnInit() {
  }

}
