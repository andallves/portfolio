import { CardTrajectory, Experience } from '@core/models/entities/trajectory';

export const experiencesData: Experience[] = [
  {
    id: 'nds-01',
    title: 'Desenvolvedor Fullstack',
    company: 'NDS - Núcleo de Desenvolvimento de Software',
    description:
      'Atuei como Desenvolvedor Full Stack no Núcleo de Desenvolvimento de' +
      ' Software (NDS), onde contribuí na criação, evolução e manutenção de' +
      ' sistemas utilizados por diferentes setores do IFCE. Trabalhei com' +
      ' Angular, C#, MySQL e práticas de arquitetura limpa' +
      ' participando desde o desenvolvimento do front-end até a' +
      ' implementação das APIs e regras de negócio. Durante esse período, tive participação ativa na análise de' +
      ' requisitos, desenvolvimento de novas funcionalidades, correção de' +
      ' bugs e melhorias contínuas. Também colaborava com o time para propor' +
      ' soluções técnicas mais escaláveis e aderentes às boas práticas,' +
      ' incluindo Clean Code, SOLID, CQRS e padrões de projeto.',
    date: 'Agosto/2023 - Abril/2025',
  },
  {
    id: 'coffee-ai-02',
    title: 'Desenvolvedor Frontend',
    company: 'Coffee AI - Freelancer',
    description:
      'Atuei como Frontend Developer na Coffee AI, desenvolvendo interfaces para produtos voltados à automação e inteligência artificial. Trabalhei com React, TypeScript, Styled Components e integrações via REST, criando telas intuitivas, acessíveis e orientadas à experiência do usuário.\n' +
      '\n' +
      'Fui responsável pela construção de componentes reutilizáveis, melhoria de fluxos existentes e implementação de novas funcionalidades junto ao time de produto. Além disso, participei da organização do código, padronização visual e otimizações que reduziram retrabalho e aumentaram a eficiência no desenvolvimento.\n',
    date: 'Janeiro/2025 - Abril/2025',
  },
  {
    id: 'veceri-seidor-03',
    title: 'Desenvolvedor Fullstack',
    company: 'Viceri SEIDOR',
    description:
      'Atuei como Desenvolvedor Full Stack na Viceri Seidor, trabalhando em' +
      ' soluções corporativas utilizando C#, .NET, Angular, Postgres e AWS.' +
      ' Contribuí no desenvolvimento de novas funcionalidades, manutenção de' +
      ' sistemas e integração de módulos com APIs internas e serviços externos. Além do trabalho de desenvolvimento fullstack, também construí automações em Python para otimizar fluxos do time de DevOps, principalmente na plataforma Azure. Essas automações ajudaram a reduzir tempo de execução de processos manuais, melhorar a rastreabilidade e aumentar a eficiência na entrega contínua.Colaborei ativamente com squads multidisciplinares, participei de cerimônias ágeis, refinamento técnico e revisão de código, sempre buscando aplicar boas práticas como Clean Code, SOLID e arquitetura limpa.',
    date: 'Julho/2025 - Setembro/2025',
  },
];

export const academicTrajectory: Array<CardTrajectory> = [
  {
    trajectoryTitle: 'Ciência da Computação',
    trajectoryDescription:
      'Atualmente sou estudante de Ciência da Computação no Instituto Federal de Educação, Ciência e Tecnologia do Ceará.',
    trajectoryTime: '',
    trajectoryDate: 'Outubro/2018 - Atualmente',
  },
  {
    trajectoryTitle: 'Curso Desenvolvedor Web | Udemy',
    trajectoryDescription:
      'HTML5, CSS3, Javascript, BootStrap, jQuery, TypeScript, PHP, MySQL, AJAX, SEO e muito mais.',
    trajectoryTime: '49 horas',
    trajectoryDate: 'Maio/2022 - Setembro/2022',
  },
  {
    trajectoryTitle: 'Curso de JavaScript e TypeScript | Udemy',
    trajectoryDescription:
      'Javascript e TypeScript - front-end e back-end (Full Stack) - Node, Express, noSQL, React, hooks, Redux, Design Patterns.',
    trajectoryTime: '146 horas',
    trajectoryDate: 'Novembro/2022 - Junho/2023',
  },
  {
    trajectoryTitle: 'Curso de React.Js e Next.Js | Udemy',
    trajectoryDescription:
      'ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook, Strapi, HTML e CSS com TypeScript e JavaScript.',
    trajectoryTime: '92 horas',
    trajectoryDate: 'Abril/2023 - Setembro/2023',
  },
];
