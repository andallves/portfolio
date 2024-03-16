import { Image } from '../../models/entities/image';
import { CustomText } from '../../models/entities/custom-text';

export interface ProjectCard {
  title: string;
  description: string;
  tecnologias: CustomText[];
  image: Image;
}
