import { Injectable } from '@nestjs/common';
import { Resource } from '../models/resource.model';
import { resourcesMock } from '../mocks/resource.mock';
import { ResourceStatus } from 'src/enums/resource-status.enum';

@Injectable()
export class ResourceService {
  private resources: Resource[] = resourcesMock;

  create(resource: Resource): Resource {
    const newResource: Resource = {
      id: this.resources.length + 1,
      description: resource.description,
      characteristics: resource.characteristics,
      status: resource.status || ResourceStatus.AVAILABLE,
    };
    this.resources.push(newResource);
    return newResource;
  }

  findAll(): Resource[] {
    return this.resources;
  }

  findById(id: number): Resource {
    return this.resources.find(resource => resource.id === id);
  }

  update(id: number, resource: Resource): Resource {
    const index = this.resources.findIndex(resource => resource.id === id);
    const updatedResource: Resource = {
      id: id,
      description: resource.description,
      characteristics: resource.characteristics,
      status: resource.status,
    };
    this.resources[index] = updatedResource;
    return updatedResource;
  }

  delete(id: number): Resource {
    const index = this.resources.findIndex(resource => resource.id === id);
    const deletedResource: Resource = this.resources[index];
    this.resources.splice(index, 1);
    return deletedResource;
  }
}