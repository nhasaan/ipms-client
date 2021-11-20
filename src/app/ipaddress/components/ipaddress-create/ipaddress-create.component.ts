import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IpaddressForm } from '../../forms/ipaddress-form.form';
import { IpaddressModel } from '../../models/ipaddress.model';
import { IpaddressService } from '../../services/ipaddress.service';

@Component({
  selector: 'app-ipaddress-create',
  templateUrl: './ipaddress-create.component.html',
  styleUrls: ['./ipaddress-create.component.scss'],
})
export class IpaddressCreateComponent implements OnInit, OnDestroy {
  ipaddressFormSubject!: Subject<IpaddressModel>;
  form = this.formBuilder.group(IpaddressForm);
  private id: string = '';
  private sub: any;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private service: IpaddressService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
        console.log(params['id']);
        this.service.findIpaddress(params['id']).subscribe((ip) => {
          if (ip && ip._id) {
            this.form.patchValue(ip);
          } else {
            this.router.navigate(['error1', { id: this.id }]);
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  submitForm = () => {
    // this.loading.next(true);
    const formData: any = this.form.value;
    if (!this.id) {
      this.service
        .create(formData)
        .subscribe((ip) => this.router.navigate(['ipaddresses', 'list']));
    } else {
      this.service
        .update(this.id, formData)
        .subscribe((ip) => this.router.navigate(['ipaddresses', 'list']));
    }
  };
}
