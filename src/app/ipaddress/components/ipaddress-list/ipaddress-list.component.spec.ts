import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpaddressListComponent } from './ipaddress-list.component';

describe('IpaddressListComponent', () => {
  let component: IpaddressListComponent;
  let fixture: ComponentFixture<IpaddressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpaddressListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpaddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
