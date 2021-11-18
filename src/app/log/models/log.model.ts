export class LogModel {
  _id: string = '';
  message: string = '';
  data: string = '';
  entity: string = '';
  onModel: string = '';
  eventType: string = '';
  createdAt: string = '';
  updatedAt: string = '';

  setUser(logModel: any) {
    this._id = logModel._id;
    this.message = logModel.message;
    this.data = logModel.data || '';
    this.entity = logModel.entity || '';
    this.onModel = logModel.onModel || '';
    this.eventType = logModel.eventType || '';
    this.createdAt = logModel.createdAt || '';
    this.updatedAt = logModel.updatedAt || '';
  }
}

export interface IQueryParamsLog {
  _id?: string;
  search?: string;
  page?: number;
  size?: number;
}
