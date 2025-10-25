import { CardProject, Stack } from '@core/models/entities/card-project';

export const projects: Array<CardProject> = [
  {
    id: 20230801,
    stack: Stack.fullstack,
    title: 'Sistema de Avisos',
    urlRepository: '',
    urlSite: 'https://avisos.maracanau.ifce.edu.br/avisos',
    description:
      'O Sistema de Avisos foi desenvolvido pelo Núcleo de' +
      ' Desenvolvimento de Software (NDS) para atender às demandas do setor de Comunicação do IFCE – Campus Maracanaú, com o objetivo de otimizar a divulgação de informações institucionais e centralizar o gerenciamento de avisos internos e externos.A aplicação permite que o setor de comunicação publique, edite e gerencie avisos em tempo real, facilitando a comunicação entre a direção, servidores e comunidade acadêmica. Além disso, o sistema possibilita controle de acesso por perfil, garantindo que apenas usuários autorizados possam criar ou modificar conteúdos.Durante o desenvolvimento, atuei tanto no frontend quanto no backend, aplicando boas práticas de arquitetura de software e garantindo uma interface intuitiva, responsiva e acessível.Principais Responsabilidades:Implementação do frontend utilizando Angular, HTML5, SCSS e TypeScript, com foco em usabilidade e responsividade.Desenvolvimento e integração do backend em C# com ASP.NET Core, incluindo a criação de endpoints RESTful e manipulação de arquivos.Aplicação de padrões de projeto (SOLID, Clean Architecture e CQRS), visando escalabilidade e manutenção a longo prazo.Implementação de autenticação e autorização JWT, garantindo segurança no acesso ao sistema.Colaboração em equipe com outros desenvolvedores e o setor de comunicação para levantamento de requisitos e testes funcionais.O projeto proporcionou uma melhoria significativa na comunicação interna do campus, reduzindo o tempo de publicação de avisos e garantindo mais autonomia e agilidade ao setor responsável.',
    technologies: [
      { text: 'Angular', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
      { text: 'SCSS', size: 'smallest' },
      { text: 'C#', size: 'smallest' },
      { text: 'ASP.NET Core', size: 'smallest' },
      { text: 'Entity Framework', size: 'smallest' },
      { text: 'Clean Architecture', size: 'smallest' },
      { text: 'CQRS', size: 'smallest' },
      { text: 'JWT Authentication', size: 'smallest' },
    ],
    image: {
      path: './assets/img/sistema-de-avisos.png',
      altText: 'Tela de Login do Sistema de Avisos',
      width: '50',
      height: '50',
    },
  },
  {
    id: 20241130,
    stack: Stack.fullstack,
    title: 'Intranet IFCE – Campus Maracanaú',
    urlRepository: '',
    urlSite: 'https://intranet.maracanau.ifce.edu.br/login',
    description:
      'A Intranet do IFCE – Campus Maracanaú é uma plataforma web interna desenvolvida pelo Núcleo de Desenvolvimento de Software (NDS) com o objetivo de centralizar informações institucionais, processos administrativos e serviços voltados à comunidade acadêmica.O sistema busca oferecer uma experiência unificada para servidores e alunos, integrando diversos módulos — como gestão de documentos, comunicados, avisos e notificações — de forma segura, acessível e intuitiva.Durante minha atuação no projeto, tive a oportunidade de desenvolver o módulo de notificações, responsável por gerenciar e exibir alertas personalizados aos usuários de acordo com suas interações no sistema. Esse módulo foi projetado para melhorar a comunicação interna e garantir que informações importantes fossem entregues de forma rápida e eficiente.',
    technologies: [
      { text: 'Angular', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
      { text: 'SCSS', size: 'smallest' },
      { text: 'C#', size: 'smallest' },
      { text: 'ASP.NET Core', size: 'smallest' },
      { text: 'SignalR', size: 'smallest' },
      { text: 'MySQL', size: 'smallest' },
      { text: 'RESTful API', size: 'smallest' },
    ],
    image: {
      path: './assets/img/intranet.png',
      altText: 'Tela de Login do Intranet do IFCE Maracanaú',
      width: '50',
      height: '50',
    },
  },
  {
    id: 10122020,
    stack: Stack.frontend,
    title: 'ASKAE',
    urlRepository: 'https://github.com/andallves/ProjetoAskae',
    urlSite: 'https://projeto-askae.vercel.app/',
    description:
      'Essa Landing Page foi um dos meus primeiros projetos a serem desenvolvidos, a ASKAE é uma acadêmia de karatê onde passei uma boa parte da minha adolescência, então quando iniciei meus estudos no mundo do desenvolvimento web, esse foi o primeiro projeto que me veio em mente, construir uma página para minha equipe, desenvolvi logo no começo dos meus estudos de **HTML**, **CSS** e **JavaScript**, não entendia nem sobre **Node** ou o que era package.json, muito utilizado nos meus atuais projetos frontend. Bem, essa landing page havia ficado pelo meio do caminho, sem nenhuma funcionalidade, ou mesmo responsividade...Recentemente tomei consciência que para ter um portfólio apresentável, eu deveria finalizar os meus projetos inacabados, e como a landing page da ASKAE foi um dos meus primeiros projetos, resolvi começar por ele para finalizar, estou aplicando as melhores práticas de programação que venho aprendendo nos últimos tempos, tais como mobile first, ou seja, uma responsividade para que a página não se desconfigure todas ao ser ajustada a largura da tela; optei por manter o desenvolvimento em vanila.js (só o básico, HTML, CSS, JS e Bootstrap que tinha desde o começo) sem usar React ou mesmo Angular, para por em prática meu dominio das tecnologias mais básicas, mas que é a base de toda página na web; adicionei o package.json pois pretendia fazer o deploy da página e por no meu portfólio, porém contendo apenas configurações mais básica, para o build e deploy',
    technologies: [
      { text: 'HTML', size: 'smallest' },
      { text: 'CSS', size: 'smallest' },
      { text: 'JavaScript', size: 'smallest' },
      { text: 'Bootstrap', size: 'smallest' },
    ],
    image: {
      path: './assets/img/askae.png',
      altText: 'Tela da lista de afazeres',
      width: '50',
      height: '50',
    },
  },
  {
    id: 11062024,
    stack: Stack.fullstack,
    title: 'LockerEase',
    urlRepository: 'https://github.com/andallves/LockerEase',
    urlSite: '',
    description:
      'LockerEase é um sistema de gerenciamento e reserva de armários desenvolvido como projeto acadêmico na disciplina de Programação Orientada a Objetos (POO). A aplicação foi construída utilizando o padrão MVC em C#, com Blazor para criação de uma interface web interativa e responsiva.O sistema permite que usuários visualizem, reservem e gerenciem armários de forma prática, enquanto administradores podem cadastrar novos armários, acompanhar reservas e gerar relatórios de utilização. O projeto destaca-se pelo uso de conceitos de POO, como encapsulamento, herança e polimorfismo, aliados à arquitetura MVC para organização clara do código e separação de responsabilidades.',
    technologies: [
      { text: 'C#', size: 'smallest' },
      { text: '.NET', size: 'smallest' },
      { text: 'Blazor', size: 'smallest' },
    ],
    image: {
      path: './assets/img/lockerease.png',
      altText: 'Tela da inicial do sistema LockerEase',
      width: '50',
      height: '50',
    },
  },
  {
    id: 23102024,
    stack: Stack.frontend,
    title: 'Coffee House',
    urlRepository: 'https://github.com/andallves/ToDo-frontend',
    urlSite: 'https://coffee-house-ux-c5ur.vercel.app/',
    description:
      'O Coffee House é um projeto web desenvolvido com o objetivo de simular o sistema de pedidos de uma cafeteria, oferecendo uma experiência intuitiva e agradável ao usuário.\n' +
      'A aplicação permite visualizar produtos, adicionar itens ao carrinho e finalizar pedidos, reproduzindo de forma fiel o fluxo de um sistema real de e-commerce simplificado.\n' +
      '\n' +
      'Com uma interface moderna, responsiva e acessível, o Coffee House foi desenvolvido utilizando React com TypeScript, aliado às melhores práticas de arquitetura e organização de código.\n' +
      'O projeto também faz uso do Easy-Peasy para gerenciamento de estado global, garantindo fluidez nas interações entre componentes, e do Axios para comunicação com APIs RESTful.',
    technologies: [
      { text: 'HTML5', size: 'smallest' },
      { text: 'CSS3', size: 'smallest' },
      { text: 'React', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
      { text: 'Easy-Peasy', size: 'smallest' },
      { text: 'Axios', size: 'smallest' },
      { text: 'Bootstrap', size: 'smallest' },
      { text: 'Angular', size: 'smallest' },
      { text: 'SASS', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
    ],
    image: {
      path: './assets/img/coffee-house.png',
      altText: 'Tela inicial do Coffee House',
      width: '50',
      height: '50',
    },
  },
  {
    id: 10012025,
    stack: Stack.frontend,
    title: 'Cubos Movie',
    urlRepository: 'https://github.com/andallves/cubos-movie-ux',
    urlSite: 'https://cubos-movie-ux.vercel.app/',
    description:
      'Cubos Movies é um projeto de desafio front-end desenvolvido para' +
      ' praticar e demonstrar habilidades em HTML, CSS, JavaScript, React e TypeScript, com foco na criação de uma página de filmes interativa e responsiva. O projeto também envolve integração com APIs externas, permitindo obter dados de filmes em tempo real. O Cubos Movies oferece aos usuários a possibilidade de explorar informações sobre filmes populares, buscar títulos específicos e visualizar detalhes completos, incluindo sinopse, elenco, avaliações e outros dados relevantes. A interface foi projetada para ser intuitiva, responsiva e de fácil navegação, garantindo uma experiência agradável em qualquer dispositivo.',
    technologies: [
      { text: 'HTML5', size: 'smallest' },
      { text: 'CSS3', size: 'smallest' },
      { text: 'JavaScript', size: 'smallest' },
      { text: 'React', size: 'smallest' },
      { text: 'Styled Components', size: 'smallest' },
      { text: 'Axios', size: 'smallest' },
    ],
    image: {
      path: './assets/img/cubos-movie.png',
      altText: 'Tela da inicial da Cubos Movie',
      width: '50',
      height: '50',
    },
  },
  {
    id: 15032025,
    stack: Stack.frontend,
    title: 'Coffee AI',
    urlRepository: '',
    urlSite: 'https://coffee-ai-ux.vercel.app/',
    description:
      'Coffee.AI é um portfólio pessoal que combina apresentação de projetos, experiências e formas de contato de maneira visualmente atraente e profissional, com um toque moderno de interatividade. O projeto foi desenvolvido em Angular, utilizando EmailJS para envio de mensagens sem necessidade de backend.O Coffee.AI serve como uma vitrine de habilidades e experiências do desenvolvedor, oferecendo uma experiência de navegação fluida e interativa. É ideal para mostrar projetos, habilidades técnicas e permitir contato direto via formulário.',
    technologies: [
      { text: 'Angular', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
      { text: 'SCSS', size: 'smallest' },
      { text: 'EmailJs', size: 'smallest' },
      { text: 'RxJS', size: 'smallest' },
      { text: 'C#', size: 'smallest' },
    ],
    image: {
      path: './assets/img/coffee-ai.png',
      altText: 'imagem de avatar',
      width: '50',
      height: '50',
    },
  },
  {
    id: 14072025,
    stack: Stack.fullstack,
    title: 'SuperHero Registry',
    urlRepository: '',
    urlSite: 'https://avisos-h.maracanau.ifce.edu.br/',
    description:
      'Superhero Registry é uma aplicação de cadastro e gerenciamento de' +
      ' super-heróis, desenvolvida como projeto de prática em Angular 17 com' +
      ' Standalone Components e C# .NET no backend, utilizando CQRS e PostgreSQL para armazenamento.O sistema permite criar, editar e consultar informações sobre super-heróis, seus superpoderes e associações, garantindo um gerenciamento completo das entidades envolvidas. O projeto foca em boas práticas de programação, arquitetura limpa e uso de padrões de design.',
    technologies: [
      { text: 'Angular', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
      { text: 'C#', size: 'smallest' },
    ],
    image: {
      path: './assets/img/superhero-registry.png',
      altText: 'imagem de avatar',
      width: '50',
      height: '50',
    },
  },
  {
    id: 10122025,
    stack: Stack.fullstack,
    title: 'Zenvus',
    urlRepository: 'https://github.com/andallves/zenvus',
    urlSite: '',
    description:
      'Zenvus é um sistema de controle financeiro pessoal desenvolvido com foco em organização, monitoramento e planejamento de despesas e receitas. O projeto foi construído utilizando C# no backend com .NET e Angular no frontend, seguindo os princípios de Clean Architecture e implementando CQRS para separar operações de leitura e escrita, garantindo escalabilidade e manutenibilidade.O sistema permite que usuários registrem e gerenciem suas finanças pessoais, incluindo controle de contas, receitas, despesas, orçamentos e metas. Além disso, ele gera relatórios detalhados que auxiliam na tomada de decisões financeiras conscientes.',
    technologies: [
      { text: 'Angular', size: 'smallest' },
      { text: 'TypeScript', size: 'smallest' },
      { text: 'C#', size: 'smallest' },
      { text: '.NET', size: 'smallest' },
      { text: 'PostgreSQL', size: 'smallest' },
      { text: 'MeditR', size: 'smallest' },
      { text: 'JWT', size: 'smallest' },
    ],
    image: {
      path: './assets/img/zenvus.png',
      altText: 'imagem de avatar',
      width: '50',
      height: '50',
    },
  },
];
