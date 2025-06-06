export interface IMenuItem {
  label: string;
  url: string;
}

export const menuItemsData: IMenuItem[] = [
  { label: 'Início', url: 'home' },
  { label: 'Sobre', url: 'about' },
  { label: 'Projetos', url: 'projects' },
  { label: 'Habilidades', url: 'skills' },
  { label: 'Experiência', url: 'career' },
  { label: 'Contato', url: 'contact' },
];
