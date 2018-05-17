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

  admin: boolean;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }

  adminPanel() {
    this.router.navigate(['/admin']);
  }

  showMenuPhone() {
    this.menuRef.nativeElement.classList.toggle('hidden');
  }
}
