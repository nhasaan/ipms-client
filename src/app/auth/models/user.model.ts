import { AuthModel } from './auth.model';

export class UserModel extends AuthModel {
  _id: string = '';
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';

  setUser(user: any) {
    this._id = user._id;
    this.email = user.email;
    this.password = user.password || '';
    this.firstName = user.firstName || '';
    this.lastName = user.lastName || '';
  }
}
