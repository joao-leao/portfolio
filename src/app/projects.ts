export interface IProjects {
    name: string;
    img: string;
    descImg: string;
    desc: string;
    technologies: string[];
    urlLive: string;
    urlGitHub: string;
}

export const projects: IProjects[] = [
    {name: "Kabyte Computers", img: "./assets/imgs/Kabyte.png", descImg: "Imagem do projeto Kabyte", desc: "Projeto feito no programa StartCapgemini, o site aborda principais regras de negócios em um site de vendas focado em front-end.", technologies: ["TS", "Angular", "HTML", "CSS"], urlLive: "https://joao-leao.github.io/kabyte-computers/", urlGitHub: "https://github.com/joao-leao/kabyte-computers"},
    {name: "JS developer pokedex", img: "./assets/imgs/Pokedex.png", descImg: "Imagem do desafio pokedex", desc: "Desafio da Dio sobre consumo de API. Desafio consiste em mostrar os detalhes do pokemon ao clicar no card do pokemon desejado.", technologies: ["JS", "HTML", "CSS", "API"], urlLive: "https://joao-leao.github.io/js-developer-pokedex/", urlGitHub: "https://github.com/joao-leao/js-developer-pokedex"},
    {name: "Clone BuzzFeed", img: "./assets/imgs/ProjetoBuzzfeed.png", descImg: "Imagem do clone do BuzzFeed", desc: "Clone do BuzzFeed utilizando o Angular, clone feito na plataforma da DIO, usando temas como: dinamismo, componentização e fácil manutenção.", technologies: ["TS", "HTML", "CSS", "Angular"], urlLive: "https://joao-leao.github.io/angular-buzzFeed/", urlGitHub: "https://github.com/joao-leao/angular-buzzFeed"},
    {name: "Landing page", img: "./assets/imgs/CSSDIO.png", descImg: "Imagem do projeto Landing page", desc: "Desafio CSS da DIO. Desafio consiste em criar uma Landing page do zero utilizando um projeto do Figma como base.", technologies: ["HTML", "CSS"], urlLive: "https://joao-leao.github.io/trilha-css-desafio-01/", urlGitHub: "https://github.com/joao-leao/trilha-css-desafio-01"},
    {name: "Portfólio", img: "./assets/imgs/Portifolio.png", descImg: "Imagem do Portifólio", desc: "Primeiro projeto pessoal feito do zero, usando o Framework Angular, layout responsivo, componentizado e dinâmico para melhor manutenção.", technologies: ["TS", "HTML", "CSS", "Angular"], urlLive: "https://joao-leao.github.io/portifolio-angular/", urlGitHub: "https://github.com/joao-leao/portifolio-angular"},
    
]
