export class IpaddressModel {
  _id: string = '';
  ip: string = '';
  label: string = '';
  createdAt: string = '';
  updatedAt: string = '';

  setUser(ipModel: any) {
    this._id = ipModel._id;
    this.ip = ipModel.email;
    this.label = ipModel.label || '';
    this.createdAt = ipModel.createdAt || '';
    this.updatedAt = ipModel.updatedAt || '';
  }
}
