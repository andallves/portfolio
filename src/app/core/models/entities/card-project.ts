import { Image } from '../../models/entities/image';
import { CustomText } from '../../models/entities/custom-text';

export enum Stack {
  frontend = 'frontend',
  backend = 'backend',
  fullstack = 'fullstack',
}

export interface CardProject {
  id: number;
  stack: Stack;
  title: string;
  description: string;
  urlRepository: string;
  urlSite: string;
  technologies: CustomText[];
  image: Image;
}
