import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  isLoggedin: boolean;

  constructor(private authService: AuthService) {
    this.isLoggedin = this.authService.currentUserValue ? true : false;
  }

  ngOnInit(): void {}
}
