import { Icon } from './icon';

export type Size = 'smallest' | 'small' | 'normal';

export interface CustomText {
  icon?: Icon;
  text: string;
  size: Size;
}
