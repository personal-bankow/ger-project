import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Resource } from '../models/resource.model';
import { ResourceService } from '../services/resource.service';
import { ResourceStatus } from 'src/enums/resource-status.enum';
import { CreateResourceDto } from 'src/dtos/create-resource.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('resources')
@Controller('resources')
export class ResourceController {
  constructor(private resourceService: ResourceService) {}

  @ApiProperty()
  @Post()
  create(@Body() resource: CreateResourceDto) {
    return this.resourceService.create({
      id: Date.now(),
      name: resource.name,
      description: resource.description,
      characteristics: resource.characteristics,
      status: resource.status || ResourceStatus.AVAILABLE,
    });
  }

  @ApiProperty()
  @Get()
  findAll() {
    return this.resourceService.findAll();
  }

  @ApiProperty()
  @Get(':id')
  findById(@Param('id') id: number) {
    return this.resourceService.findById(id);
  }

  @ApiProperty()
  @Put(':id')
  update(@Param('id') id: number, @Body() resource: CreateResourceDto) {
    return this.resourceService.update(id, {
      id: id,
      name: resource.name,
      description: resource.description,
      characteristics: resource.characteristics,
      status: resource.status,
    });
  }

  @ApiProperty()
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.resourceService.delete(id);
  }
}
