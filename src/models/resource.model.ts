import { ResourceStatus } from '../enums/resource-status.enum';

export class Resource {
  id: number;
  name: string;
  description: string;
  characteristics: string;
  status: ResourceStatus;

  constructor(id: number, resourceName: string, description: string, characteristics: string, status: ResourceStatus) {
    this.id = id;
    this.name = resourceName;
    this.description = description;
    this.characteristics = characteristics;
    this.status = status;
  }
}