import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpaddressCreateComponent } from './ipaddress-create.component';

describe('IpaddressCreateComponent', () => {
  let component: IpaddressCreateComponent;
  let fixture: ComponentFixture<IpaddressCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpaddressCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpaddressCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
