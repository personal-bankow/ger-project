import { ResourceStatus } from '../enums/resource-status.enum';

export class Resource {
  id: number;
  description: string;
  characteristics: string;
  status: ResourceStatus;

  constructor(id: number, description: string, characteristics: string, status: ResourceStatus) {
    this.id = id;
    this.description = description;
    this.characteristics = characteristics;
    this.status = status;
  }
}