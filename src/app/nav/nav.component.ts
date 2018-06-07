import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

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
