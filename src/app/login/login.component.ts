import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm, Validators, FormControl, NgControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  constructor(private auth: AuthService) {}

  ngOnInit() {}

  login(logForm: NgForm): void {
    this.auth.login(logForm.value.email, logForm.value.pass);
  }

  register(logForm: NgForm): void {
    this.auth.register(logForm.value.email, logForm.value.pass);
  }
}
