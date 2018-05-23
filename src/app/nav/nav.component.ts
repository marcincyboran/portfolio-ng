import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('menu') menuRef: ElementRef;

  constructor(public auth: AuthService) {}

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }

  showMenuPhone() {
    this.menuRef.nativeElement.classList.toggle('hidden');
  }
}
