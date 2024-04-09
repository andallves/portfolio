import { CardProject, Stack } from '#core/models/entities/card-project';

export const projects: Array<CardProject> = [
  {
    id: 0,
    stack: Stack.fullstack,
    title: 'ToDo',
    description:
      'Projeto desenvolvido no final de um curso de angular' +
      ' para validar meus conhecimentos, ele é uma lista de afazeres,' +
      ' com tela de login (autenticação), cadastro e a tela inicial hoje é' +
      ' possível ver todas as atividades em lista ou em cards.',
    tecnologias: [
      { text: 'Angular', size: 'smallest' },
      { text: 'SASS', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
    ],
    image: {
      pathImage: './assets/todolist.png',
      altText: 'Tela da lista de afazeres',
      width: '50',
      height: '50',
    },
  },
  {
    id: 1,
    stack: Stack.fullstack,
    title: 'Pegue Seu Armario',
    description:
      'Projeto desenvolvido durante a disciplina de Programação' +
      ' Orientada a Objetos da faculdade para facilitar o processo de' +
      ' solicitação de armário dentro do campus. Frontend desenvolvido em' +
      ' Angular e backend em C#.',
    tecnologias: [
      { text: 'Angular', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
      { text: 'C#', size: 'smallest' },
    ],
    image: {
      pathImage: './assets/profile.jpg',
      altText: 'imagem de avatar',
      width: '50',
      height: '50',
    },
  },
  {
    id: 2,
    stack: Stack.frontend,
    title: 'Sistema de Avisos',
    description:
      'Esse Sistema de Avisos foi desenvolvido no NDS (Nucleo' +
      ' de Desenvolvimento de Software) do IFCE, onde eu contribuir no' +
      ' frontend, no desenvolvimento da tela de gerenciamento de usuários.',
    tecnologias: [
      { text: 'Angular', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
      { text: 'C#', size: 'smallest' },
    ],
    image: {
      pathImage: './assets/sistemadeavisos.png',
      altText: 'imagem de avatar',
      width: '50',
      height: '50',
    },
  },
  {
    id: 3,
    stack: Stack.frontend,
    title: 'Sistema de Avisos',
    description:
      'Esse Sistema de Avisos foi desenvolvido no NDS (Nucleo' +
      ' de Desenvolvimento de Software) do IFCE, onde eu contribuir no' +
      ' frontend, no desenvolvimento da tela de gerenciamento de usuários.',
    tecnologias: [
      { text: 'Angular', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
      { text: 'C#', size: 'smallest' },
    ],
    image: {
      pathImage: './assets/sistemadeavisos.png',
      altText: 'imagem de avatar',
      width: '50',
      height: '50',
    },
  },
  {
    id: 4,
    stack: Stack.frontend,
    title: 'Sistema de Avisos',
    description:
      'Esse Sistema de Avisos foi desenvolvido no NDS (Nucleo' +
      ' de Desenvolvimento de Software) do IFCE, onde eu contribuir no' +
      ' frontend, no desenvolvimento da tela de gerenciamento de usuários.',
    tecnologias: [
      { text: 'Angular', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
      { text: 'C#', size: 'smallest' },
    ],
    image: {
      pathImage: './assets/sistemadeavisos.png',
      altText: 'imagem de avatar',
      width: '50',
      height: '50',
    },
  },
  {
    id: 5,
    stack: Stack.frontend,
    title: 'Sistema de Avisos',
    description:
      'Esse Sistema de Avisos foi desenvolvido no NDS (Nucleo' +
      ' de Desenvolvimento de Software) do IFCE, onde eu contribuir no' +
      ' frontend, no desenvolvimento da tela de gerenciamento de usuários.',
    tecnologias: [
      { text: 'Angular', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
      { text: 'C#', size: 'smallest' },
    ],
    image: {
      pathImage: './assets/sistemadeavisos.png',
      altText: 'imagem de avatar',
      width: '50',
      height: '50',
    },
  },
  {
    id: 6,
    stack: Stack.frontend,
    title: 'Sistema de Avisos',
    description:
      'Esse Sistema de Avisos foi desenvolvido no NDS (Nucleo' +
      ' de Desenvolvimento de Software) do IFCE, onde eu contribuir no' +
      ' frontend, no desenvolvimento da tela de gerenciamento de usuários.',
    tecnologias: [
      { text: 'Angular', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
      { text: 'C#', size: 'smallest' },
    ],
    image: {
      pathImage: './assets/sistemadeavisos.png',
      altText: 'imagem de avatar',
      width: '50',
      height: '50',
    },
  },
];
