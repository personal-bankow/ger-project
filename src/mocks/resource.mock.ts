import { ResourceStatus } from 'src/enums/resource-status.enum';
import { Resource } from '../models/resource.model';

export const resourcesMock: Resource[] = [
  new Resource(1, 'Meeting room', 'With air conditioning', "", ResourceStatus.AVAILABLE),
  new Resource(2, 'Projector', 'With HDMI cable', "", ResourceStatus.MAINTENANCE),
  new Resource(3, 'Laptop', 'With charger', "", ResourceStatus.AVAILABLE),
];
