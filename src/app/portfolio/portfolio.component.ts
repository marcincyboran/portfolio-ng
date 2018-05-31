import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';
import mixitup from 'mixitup';
import { state } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  @ViewChild('test') wrapper: ElementRef;
  mix: any;
  constructor() {}

  ngOnInit() {
    this.mixItUpInit();
  }

  ngOnDestroy() {
    // Reset is needed else it won't work after changing components
    this.mix.destroy();
  }

  mixItUpInit() {
    this.mix = mixitup('#mixitup-wrapper', {
      load: {
        sort: 'year:random' /* default:asc */
      },
      animation: {
        effects: 'fade scale',
        duration: 700
      },
      classNames: {
        block: 'programs',
        elementFilter: 'filter-btn',
        elementSort: 'sort-btn'
      },
      selectors: {
        target: '.mixitup-target'
      }
    });
  }
}
