import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  selfLayout = 'default';
  headerLogo: string;
  isLoggedin: boolean;

  constructor(private authService: AuthService) {
    this.headerLogo = this.getLogo();
    this.isLoggedin = this.authService.currentUserValue ? true : false;
  }

  ngOnInit(): void {}

  private getLogo() {
    return './assets/logo-dark.png';
  }
}
