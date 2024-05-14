export interface ISkills {
    name: string;
    img: string;
    score: string;
    color: string;
    descImg: string;
}

export const skills: ISkills[] = [
    {name: "HTML", img: "./assets/imgs/html-1.svg", score: "80", color: "orange", descImg: "Ícone HTML"},
    {name: "CSS", img: "./assets/imgs/css-3.svg", score: "80", color: "blue", descImg: "Ícone CSS"},
    {name: "JAVASCRIPT", img: "./assets/imgs/logo-javascript.svg", score: "60", color: "yelow", descImg: "Ícone Javascript"},
    {name: "ANGULAR", img: "./assets/imgs/angular-icon-1.svg", score: "50", color: "red", descImg: "Ícone Angular"},
    {name: "GIT", img: "./assets/imgs/git-icon.svg", score: "32", color: "orange-2", descImg: "Ícone Git" },
    {name: "GITHUB", img: "./assets/imgs/github5.svg", score: "30", color: "black", descImg: "Ícone GitHub"},
    {name: "JAVA", img: "./assets/imgs/java2.svg", score: "30", color: "light-blue", descImg: "Ícone Java"}
]
