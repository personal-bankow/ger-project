import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Resource } from '../models/resource.model';
import { resourcesMock } from '../mocks/resource.mock';
import { ResourceStatus } from 'src/enums/resource-status.enum';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resource)
    private resourceRepository: Repository<Resource>,
  ) {}

  async create(resource: Resource) {
    const newResource = await this.resourceRepository.insert({
      id: resource.id,
      name: resource.name,
      description: resource.description,
      characteristics: resource.characteristics,
      status: resource.status || ResourceStatus.AVAILABLE,
    });
    return newResource;
  }

  async findAll() {
    return await this.resourceRepository.find();
  }

  async findById(id: number) {
    return await this.resourceRepository.findOneBy({ id });
  }

  async update(id: number, resource: Resource) {
    return await this.resourceRepository.update(id, {
      name: resource.name,
      description: resource.description,
      characteristics: resource.characteristics,
      status: resource.status,
    });
  }

  async delete(id: number) {
    return await this.resourceRepository.delete(id);
  }
}
