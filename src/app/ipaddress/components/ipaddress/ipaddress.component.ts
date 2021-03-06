import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipaddress',
  templateUrl: './ipaddress.component.html',
  styleUrls: ['./ipaddress.component.scss'],
})
export class IpaddressComponent implements OnInit {
  constructor(private router: Router) {
    if (location.pathname === '/ipaddresses')
      this.router.navigate(['ipaddresses/list']);
  }

  ngOnInit(): void {}
}
