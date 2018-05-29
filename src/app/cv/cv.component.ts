import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { element } from 'protractor';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  animations: [
    trigger('slide-left', [
      state('out', style({
          opacity: '0',
          transform: 'translateY(-100%)'
        })),
      state('in', style({
          opacity: '1',
          transform: 'translateY(0)'
        })),
      transition('* => in', animate('800ms', keyframes([
        style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(-50%)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ])))
    ]),
    trigger('slide-right', [
      state('out', style({
          opacity: '0',
          transform: 'translateY(-100%)'
        })),
      state('in', style({
          opacity: '1',
          transform: 'translateY(0)'
        })),
      transition('* => in', animate('800ms', keyframes([
        style({opacity: 0, transform: 'translateY(100%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(50%)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ])))
    ]),
    trigger('slide-header-left', [
      state('out', style({
          opacity: '0',
          transform: 'translateY(-100%)'
        })),
      state('in', style({
          opacity: '1',
          transform: 'translateY(0)'
        })),
      transition('* => in', animate('400ms', keyframes([
        style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
        style({opacity: 0, transform: 'translateY(-50%)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ])))
    ]),
    trigger('slide-body-left', [
      state('out', style({
          opacity: '0',
          transform: 'translateX(-100%)'
        })),
      state('in', style({
          opacity: '1',
          transform: 'translateX(0)'
        })),
      transition('* => in', animate('400ms', keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(-50%)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ])))
    ]),
    trigger('slide-header-right', [
      state('out', style({
          opacity: '0',
          transform: 'translateY(100%)'
        })),
      state('in', style({
          opacity: '1',
          transform: 'translateY(0)'
        })),
      transition('* => in', animate('400ms', keyframes([
        style({opacity: 0, transform: 'translateY(100%)', offset: 0}),
        style({opacity: 0, transform: 'translateY(50%)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ])))
    ]),
    trigger('slide-body-right', [
      state('out', style({
          opacity: '0',
          transform: 'translateX(100%)'
        })),
      state('in', style({
          opacity: '1',
          transform: 'translateX(0)'
        })),
      transition('* => in', animate('400ms', keyframes([
        style({opacity: 0, transform: 'translateX(100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(50%)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ])))
    ])
  ]
})

export class CvComponent implements OnInit {
  @ViewChild('left') left: ElementRef;
  @ViewChild('right') right: ElementRef;

  slideIntervals = 300;
  stateLeftCol = 'out';
  stateRightCol = 'out';
  stateLeft: Array<string> = new Array(4).fill('out');
  stateRight: Array<string> = new Array(5).fill('out');
  constructor() {}

  ngOnInit() {
    this.stateLeftCol = 'in';
    this.stateRightCol = 'in';
  }

  columnsIn(event): void {
    this.setStates();
  }

  setStates(): void {
    this.stateLeft.forEach((el, i, arr) => {
      setTimeout(() => {
        arr[i] = 'in';
      }, i * this.slideIntervals);
      });
    this.stateRight.forEach((el, i, arr) => {
      setTimeout(() => {
        arr[i] = 'in';
      }, i * this.slideIntervals);
      });
  }
}
