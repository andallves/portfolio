import { Image } from '../../models/entities/image';
import { CustomText } from '../../models/entities/custom-text';

export enum Stack {
  frontend = 'frontend',
  backend = 'backend',
  fullstack = 'fullstack',
}

export interface ProjectCard {
  stack: Stack;
  title: string;
  description: string;
  tecnologias: CustomText[];
  image: Image;
}
