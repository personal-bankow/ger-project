import { IsNotEmpty, IsString } from 'class-validator';
import { ResourceStatus } from '../enums/resource-status.enum';

export class CreateResourceDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  characteristics: string;

  status: ResourceStatus = ResourceStatus.AVAILABLE;
}