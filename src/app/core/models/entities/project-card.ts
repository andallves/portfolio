import { Image } from 'src/app/core/models/entities/image';
import { CustomText } from 'src/app/core/models/entities/custom-text';

export interface ProjectCard {
  title: string;
  description: string;
  tecnologias: CustomText[];
  image: Image;
}
