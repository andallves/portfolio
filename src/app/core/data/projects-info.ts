import { CardProject, Stack } from '#core/models/entities/card-project';

export const projects: Array<CardProject> = [
  {
    id: 0,
    stack: Stack.fullstack,
    title: 'ToDo',
    urlRepository: 'https://github.com/andallves/ToDo-frontend',
    urlSite: '',
    description:
      'Projeto desenvolvido no final de um curso de angular' +
      ' para validar meus conhecimentos, ele é uma lista de afazeres,' +
      ' com tela de login (autenticação), cadastro e a tela inicial hoje é' +
      ' possível ver todas as atividades em lista ou em cards.',
    technologies: [
      { text: 'Angular', size: 'smallest' },
      { text: 'SASS', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
    ],
    image: {
      path: './assets/todolist.png',
      altText: 'Tela da lista de afazeres',
      width: '50',
      height: '50',
    },
  },
  {
    id: 1,
    stack: Stack.fullstack,
    title: 'Pegue Seu Armario',
    urlRepository: 'https://github.com/andallves/AppPegueSeuArmario',
    urlSite: '',
    description:
      'Projeto desenvolvido durante a disciplina de Programação' +
      ' Orientada a Objetos da faculdade para facilitar o processo de' +
      ' solicitação de armário dentro do campus. Frontend desenvolvido em' +
      ' Angular e backend em C#.',
    technologies: [
      { text: 'Angular', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
      { text: 'C#', size: 'smallest' },
    ],
    image: {
      path: './assets/profile.jpg',
      altText: 'imagem de avatar',
      width: '50',
      height: '50',
    },
  },
  {
    id: 2,
    stack: Stack.frontend,
    title: 'Sistema de Avisos',
    urlRepository: '',
    urlSite: 'https://avisos-h.maracanau.ifce.edu.br/',
    description:
      'Esse Sistema de Avisos foi desenvolvido no NDS (Nucleo' +
      ' de Desenvolvimento de Software) do IFCE, onde eu contribuir no' +
      ' frontend, no desenvolvimento da tela de gerenciamento de usuários.',
    technologies: [
      { text: 'Angular', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
      { text: 'C#', size: 'smallest' },
    ],
    image: {
      path: './assets/sistemadeavisos.png',
      altText: 'imagem de avatar',
      width: '50',
      height: '50',
    },
  },
];
