import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpaddressComponent } from './ipaddress.component';

describe('IpaddressComponent', () => {
  let component: IpaddressComponent;
  let fixture: ComponentFixture<IpaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpaddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
