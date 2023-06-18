import { Resource } from './resource.model';

export class Reservation {
  id: number;
  resource: Resource;
  note: string;

  constructor(id: number, resource: Resource, note: string) {
    this.id = id;
    this.resource = resource;
    this.note = note;
  }
}
