import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  selfLayout = 'default';
  headerLogo: string;

  constructor() {
    this.headerLogo = this.getLogo();
  }

  ngOnInit(): void {}

  private getLogo() {
    return './assets/logo-dark.png';
  }
}
