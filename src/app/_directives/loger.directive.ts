import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appLoger]'
})
export class LogerDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {}

  @HostListener('click')
  click() {
    const el = this.el.nativeElement.parentElement;
    const header = el.querySelector('h1') || el.querySelector('h2');
    console.log(header.innerHTML);
  }
}

// Im not using it yet
