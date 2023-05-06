import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Resource } from '../models/resource.model';
import { ResourceService } from '../services/resource.service';
import { ResourceStatus } from 'src/enums/resource-status.enum';
import { CreateResourceDto } from 'src/dtos/create-resource.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('resources')
@Controller('resources')
export class ResourceController {
  constructor(private resourceService: ResourceService) { }

  @ApiProperty()
  @Post()
  create(@Body() createResourceDto: CreateResourceDto): Resource {
    const resource: Resource = {
      id: 0,
      description: createResourceDto.description,
      characteristics: createResourceDto.characteristics,
      status: createResourceDto.status || ResourceStatus.AVAILABLE,
    };
    return this.resourceService.create(resource);
  }

  @ApiProperty()
  @Get()
  findAll(): Resource[] {
    return this.resourceService.findAll();
  }

  @ApiProperty()
  @Get(':id')
  findById(@Param('id') id: number): Resource {
    return this.resourceService.findById(id);
  }

  @ApiProperty()
  @Put(':id')
  update(@Param('id') id: number, @Body() updateResourceDto: CreateResourceDto): Resource {
    const resource: Resource = {
      id: id,
      description: updateResourceDto.description,
      characteristics: updateResourceDto.characteristics,
      status: updateResourceDto.status,
    };
    return this.resourceService.update(id, resource);
  }

  @ApiProperty()
  @Delete(':id')
  delete(@Param('id') id: number): Resource {
    return this.resourceService.delete(id);
  }
}