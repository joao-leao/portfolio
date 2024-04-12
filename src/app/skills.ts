export interface ISkills {
    name: string;
    img: string;
    score: string;
    color: string;
}

export const skills: ISkills[] = [
    {name: "HTML", img: "./assets/imgs/html-1.svg", score: "80", color: "orange"},
    {name: "CSS", img: "./assets/imgs/css-3.svg", score: "80", color: "blue"},
    {name: "JAVASCRIPT", img: "./assets/imgs/logo-javascript.svg", score: "60", color: "yelow"},
    {name: "ANGULAR", img: "./assets/imgs/angular-icon-1.svg", score: "50", color: "red"},
    {name: "GIT", img: "./assets/imgs/git-icon.svg", score: "32", color: "orange-2" },
    {name: "GITHUB", img: "./assets/imgs/github5.png", score: "30", color: "black"},
    {name: "JAVA", img: "./assets/imgs/java2.png", score: "30", color: "light-blue"}
]
